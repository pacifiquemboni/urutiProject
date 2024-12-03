import { ToastContainer } from "react-toastify";
import About from "./About";
import DEMO from "./demo";
import Footer from "./footer";
import GeneralDiscusion from "./generalDiscussion";
import NEWHEADER from "./header";
// import SimilarGames from "./similarGames";
// import JoinFree from "./joinFree";

const NewHome = () => {
  return (
    <div className="">
      <NEWHEADER />
      <DEMO />
      <About />
      {/* <CategoryProducts /> */}
      {/* <SimilarGames /> */}
      <GeneralDiscusion />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default NewHome;
