const Casinos = () => {
  return (
    <div className="mx-1 lg:mx-24  flex flex-col gap-5 ">
      <h1 className="text-lg lg:text-2xl font-bold text-white">Top real money casinos with Spin the Wheel</h1>
      <div className="border border-[#4a5b68] flex flex-col lg:flex-row justify-between p-3 bg-white">
        <div className="flex flex-col lg:flex-row gap-5 items-center">
          <div className="w-full lg:w-48 h-32 bg-red-600 text-white"></div>
          <div className="font-semibold">
            <p className="font-bold text-xl">Wazamba Casino </p>
            <p>Bonus: 100% up to $500 and 200 extra spins</p>
            <p>($0.1/spin) *T&Cs apply</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 items-center">
          <div className="flex flex-row lg:flex-col font-bold">
            <p>Safety Index:</p>
            <p>Very High</p>
          </div>
          <div className="flex items-center justify-center gap-2 lg:pr-5  w-full lg:w-fit">
            <button className="w-1/2 lg:w-fit border border-[#4a5b68] p-3">Quick Info</button>
            <button className="w-1/2 lg:w-fit border border-[#4a5b68] p-3">Visit Casino</button>
          </div>
        </div>
      </div>
      <div className="border border-[#4a5b68] flex flex-col lg:flex-row justify-between p-3 bg-white">
        <div className="flex flex-col lg:flex-row gap-5 items-center">
          <div className="w-full lg:w-48 h-32 bg-yellow-600 "></div>
          <div className="font-semibold">
            <p className="font-bold text-xl">Powbet Casino</p>
            <p>Bonus: 100% up to $500 and 200 extra spins</p>
            <p>($0.1/spin) *T&Cs apply</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 items-center">
          <div className="flex flex-row lg:flex-col font-bold">
            <p>Safety Index:</p>
            <p>Very High</p>
          </div>
          <div className="flex items-center justify-center gap-2 lg:pr-5  w-full lg:w-fit">
            <button className="w-1/2 lg:w-fit border border-[#4a5b68] p-3">Quick Info</button>
            <button className="w-1/2 lg:w-fit border border-[#4a5b68] p-3">Visit Casino</button>
          </div>
        </div>
      </div>
      <div className="border border-[#4a5b68] flex flex-col lg:flex-row justify-between p-3 bg-white">
        <div className="flex flex-col lg:flex-row gap-5 items-center">
          <div className="w-full lg:w-48 h-32 bg-green-700 "></div>
          <div className="font-semibold">
            <p className="font-bold text-xl">OhMySpins Casino 
            </p>
            <p>Bonus: 100% up to $500 and 200 extra spins</p>
            <p>($0.1/spin) *T&Cs apply</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 items-center">
          <div className="flex flex-row lg:flex-col font-bold">
            <p>Safety Index:</p>
            <p>Very High</p>
          </div>
          <div className="flex items-center justify-center gap-2 lg:pr-5  w-full lg:w-fit">
            <button className="w-1/2 lg:w-fit border border-[#4a5b68] p-3">Quick Info</button>
            <button className="w-1/2 lg:w-fit border border-[#4a5b68] p-3">Visit Casino</button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center ">
      <button className="w-full lg:w-1/4 p-3 text-white bolder bg-[#17d123]">Show More Casinos</button>
      </div>
      
    </div>
  );
};

export default Casinos;
