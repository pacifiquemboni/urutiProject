const GeneralDiscusion = () => {
  return (
    <div className="w-full z-10  bg-[#f0f3f7]">
      <div className="mx-1 lg:mx-20 py-10">
        <div>
          <h1 className="font-bold text-3xl text-center">Spin the Wheel - general discussion</h1>
          <p className="text-center">
            Discuss anything related to Spin the Wheel with other players, share your opinion, or
            get answers to your questions.
          </p>
          <div className="flex lg:justify-end">
            <button className="w-full lg:w-1/4 bg-[#17d123] border p-3">Add Post</button>
          </div>
        </div>
        <div className="bg-white w-full my-4 flex flex-col lg:flex-row">
          <div className="lg:w-72 w-full  p-5 text-center flex flex-row lg:flex-col">
            <div className="w-1/2 lg:w-full">
              <div className=" w-full bg-green-700 h-24"></div>
              <p>Admin</p>
            </div>
            <div>
              <p>JurajT</p>
              <p>Casino Games Specialist</p>
            </div>
          </div>
          <div className="py-5">
            <div>
              <p className="font-bold text-2xl">.</p>
              <hr />
              <p className="text-xl">
                Do you like this game? Did you hit a big win? Did you experience some technical
                issues? If there is anything you would like to discuss about{" "}
                <span className="text-green-500">Spin the Wheel</span> , you can do so here.
              </p>
              <hr />
            </div>
          </div>
        </div>
        <div className="bg-white w-full text-center flex flex-col items-center justify-center py-4">
          <div>
            <p>Edit</p>
            <p className="font-bold text-xl">Join The Community</p>
            <p>You must be logged in to add a post.</p>
          </div>
          <div className="flex lg:flex-row gap-2 flex-col w-full justify-center ">
            <button className="p-2 border lg:w-48 w-full font-bold">Login</button>
            <button className="p-2 border lg:w-48 w-full bg-[#7528ab] text-white font-bold">Sign Up</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GeneralDiscusion;
