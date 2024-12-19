import { configureStore } from "@reduxjs/toolkit";
import user from "./features/slices/user";
import users from "./features/slices/users";
import transactions from "./features/slices/transactions";
import reports from "./features/slices/reports";
import roles from "./features/slices/roles";
import permissions from "./features/slices/permissions";
import products from "./features/slices/products";
import draw from "./features/slices/draw";
import contacts from "./features/slices/contacts";
import payments from "./features/slices/payments";
import radio from "./features/slices/radio";
import player from "./features/slices/player"

export const store = configureStore({
  reducer: {
    user,
    users,
    roles,
    permissions,
    transactions,
    radio,
    payments,
    reports,
    products,
    draw,
    contacts,
    player
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
