
import balanceicon from "@assets/balance.png"

const Balance = () => {

  return (
    <div className="w-full p-5">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-2">
          <img src={balanceicon} alt="" className="w-20" />
          <div>
            <p className="font-bold text-[#7c9df8]">Current Balance</p>
            <p className="font-bold text-[#19232c]">$0.00</p>
          </div>
        </div>
        <button className=" border p-3 w-48 rounded-3xl bg-[#FF9671] text-[#19232c]">Deposit</button>
      </div>
      <div>
        <div className="flex flex-row justify-between py-4">
          <div className="bg-[#F1F4FC] h-10 w-[48%] flex flex-row justify-between items-center px-2">
            <div className="flex flex-roe gap-2">
              <p className="text-[#8595c067]">R</p>
              <p>Real Balance</p>
            </div>
            <p>$0.00</p>
          </div>
          <div className="bg-[#F1F4FC] h-10 w-[48%] flex flex-row justify-between items-center px-2">
            <div className="flex flex-roe gap-2">
              <p className="text-[#8595c067]">B</p>
              <p>Bonus Balance</p>
            </div>
            <p>$0.00</p>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="bg-[#F1F4FC] h-10 w-[48%] flex flex-row justify-between items-center px-2">
            <div className="flex flex-roe gap-2">
              <p className="text-[#8595c067]">S</p>
              <p>Sport Balance</p>
            </div>
            <p>$0.00</p>
          </div>
          <div className="bg-[#F1F4FC] h-10 w-[48%] flex flex-row justify-between items-center px-2">
            <div className="flex flex-roe gap-2">
              <p className="text-[#8595c067]">L</p>
              <p>Loyality points</p>
            </div>
            <p>0</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Balance;
