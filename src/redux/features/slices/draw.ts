import { createSlice } from "@reduxjs/toolkit";
import { GetDrawListThunk, GetDrawThunk, GetRandomTokenThunk } from "../actions/draw";
import { GetLatestWonTokenThunk, GetWonTokenThunk } from "../actions/draw/won";
import { GetTokenThunk } from "../actions/draw/tokens";
import {
  ConfirmWonThunk,
  GetTempWonThunk,
  RejectTokenThunk,
  UpdateWonInfoThunk,
} from "../actions/draw/tempWon";
import { groupBy } from "@/helpers/filterRoles";
import moment from "moment";

const initialState = {
  list: [] as any[],
  listById: {} as any,
  grouped: {} as any,
  info: {} as any,
  status: "pending" as statusType,
  error: undefined as string | any,
  fetchTimes: 0,
  filters: {} as any,
  winners: {
    list: [] as any[],
    status: "success" as statusType,
  },
  won: {
    fetchTimes: 0,
    list: [] as any[],
    status: "success" as statusType,
    info: {} as any,
    filters: {} as any,
  },
  latest_won: {
    fetchTimes: 0,
    list: [] as any[],
    status: "success" as statusType,
  },
  tempWon: {
    fetchTimes: 0,
    list: [] as any[],
    status: "success" as statusType,
    info: {} as any,
    filters: {} as any,
  },
  tokens: {
    fetchTimes: 0,
    list: [] as any[],
    status: "success" as statusType,
    info: {} as any,
    filters: {} as any,
  },
  table: {
    fetchTimes: 0,
    list: [] as any[],
    status: "success" as statusType,
    info: {} as any,
    filters: {} as any,
  },
};

export const DrawSlice = createSlice({
  name: "draw",
  initialState,
  reducers: {
    setFilters: (state, { payload }) => {
      state.filters = payload;
    },
    setWonFilters: (state, { payload }) => {
      state.won.filters = payload;
    },
    setTokenFilters: (state, { payload }) => {
      state.tokens.filters = payload;
    },
    setTempWonFilters: (state, { payload }) => {
      state.tempWon.filters = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //get Draw
      .addCase(GetDrawThunk.pending, (state) => {
        state.status = "pending";
        state.fetchTimes += 1;
      })
      .addCase(GetDrawThunk.rejected, (state) => {
        state.status = "error";
      })
      .addCase(GetDrawThunk.fulfilled, (state, { payload }) => {
        const { list, ...info } = payload;
        const filtered = list?.filter?.(
          (s: any) => !s?.isPlayed,
          // && s?.product?.isAvailable
        );
        const today = filtered?.filter?.(
          (s: any) => moment(s?.endDate).add(1, "days").format("ll") == moment().format("ll"),
          // && s?.product?.isAvailable
        );

        state.status = "success";
        state.grouped = groupBy(today || [], (s: any) => s?.product?.productId);
        state.listById = groupBy(filtered || [], (s: any) => s?.drawId);
        state.list = filtered;
        state.info = info;
      })

      // random token
      .addCase(GetRandomTokenThunk.pending, (state) => {
        state.winners.status = "pending";
      })
      .addCase(GetRandomTokenThunk.rejected, (state) => {
        state.winners.status = "error";
      })
      .addCase(GetRandomTokenThunk.fulfilled, (state, { payload }) => {
        state.winners.list = payload;
        state.winners.status = "success";
      })

      // get won token
      .addCase(GetWonTokenThunk.pending, (state) => {
        state.won.status = "pending";
        state.won.fetchTimes += 1;
      })
      .addCase(GetWonTokenThunk.rejected, (state) => {
        state.won.status = "error";
      })
      .addCase(GetWonTokenThunk.fulfilled, (state, { payload, meta: { arg } }) => {
        const { list, ...info } = payload;
        state.won.status = "success";
        state.won.list = list;
        state.won.info = info;
        if (arg) state.won.filters = arg;
      })

      // update won token
      .addCase(UpdateWonInfoThunk.fulfilled, (state, { meta: { arg } }) => {
        const index = state.won.list?.findIndex((o) => o?.id == arg?.token);
        if (index >= 0) {
          state.won.list[index] = {
            ...state.won.list[index],
            ...arg?.data,
          };
        }
      })

      // get temp won token
      .addCase(GetTempWonThunk.pending, (state) => {
        state.tempWon.status = "pending";
        state.tempWon.fetchTimes += 1;
      })
      .addCase(GetTempWonThunk.rejected, (state) => {
        state.tempWon.status = "error";
      })
      .addCase(GetTempWonThunk.fulfilled, (state, { payload, meta: { arg } }) => {
        const { list, ...info } = payload;
        state.tempWon.status = "success";
        state.tempWon.list = list;
        state.tempWon.info = info;
        if (arg) state.tempWon.filters = arg;
      })

      // confirm winner
      .addCase(ConfirmWonThunk.fulfilled, (state, { meta: { arg } }) => {
        state.tempWon.list = state.tempWon.list?.filter((f) => f?.tokenId !== arg);
      })
      // confirm winner
      .addCase(RejectTokenThunk.fulfilled, (state, { meta: { arg } }) => {
        state.tempWon.list = state.tempWon.list?.filter((f) => f?.tokenId !== arg);
      })

      // get token
      .addCase(GetTokenThunk.pending, (state) => {
        state.tokens.status = "pending";
        state.tokens.fetchTimes += 1;
      })
      .addCase(GetTokenThunk.rejected, (state) => {
        state.tokens.status = "error";
      })
      .addCase(GetTokenThunk.fulfilled, (state, { payload, meta: { arg } }) => {
        const { list, ...info } = payload;
        state.tokens.status = "success";
        state.tokens.list = list;
        state.tokens.info = info;
        if (arg) state.tokens.filters = arg;
      })

      // get latest won token
      .addCase(GetLatestWonTokenThunk.pending, (state) => {
        state.latest_won.status = "pending";
        state.latest_won.fetchTimes += 1;
      })
      .addCase(GetLatestWonTokenThunk.rejected, (state) => {
        state.latest_won.status = "error";
      })
      .addCase(GetLatestWonTokenThunk.fulfilled, (state, { payload }) => {
        state.latest_won.status = "success";
        state.latest_won.list = payload;
      })

      // draw list table
      .addCase(GetDrawListThunk.pending, (state) => {
        state.table.status = "pending";
        state.table.fetchTimes += 1;
      })
      .addCase(GetDrawListThunk.rejected, (state) => {
        state.table.status = "error";
      })
      .addCase(GetDrawListThunk.fulfilled, (state, { payload, meta: { arg } }) => {
        const { list, ...info } = payload;
        state.table.status = "success";
        state.table.list = list;
        state.table.info = info;
        state.table.filters = arg || {};
      });
  },
});

export const { setFilters, setWonFilters, setTokenFilters, setTempWonFilters } = DrawSlice.actions;
export default DrawSlice.reducer;
