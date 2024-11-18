import logo from "../../assets/logo.png";
import ValuesIcon from "../../assets/values.png";
import whoWeAreIcon from "../../assets/whoWeare.svg";
const AboutLeft = () => {
  return (
    <div>
      {/* about left */}
      <div className="w-full lg:w-80  text-white flex flex-col gap-5">
        <div className="border border-[#4a5b68] bg-[#222e38]">
          <img src={logo} alt="" className="w-full border-b border-[#4a5b68]" />
          <div className="flex gap-2 justify-center py-3">
            <img src={whoWeAreIcon} alt="" className="w-5 h-5" />

            <h1 className="text-center">Who We Are</h1>
          </div>

          <div className="p-3">
            <p>
              Our mission is to bring excitement and opportunities to everyone through innovative
              gaming experiences.
            </p>
          </div>
        </div>

        <div className="border border-[#4a5b68] bg-[#222e38]">
          <div className="flex gap-2 justify-center py-3">
            <h1 className="text-center">Our Values</h1>
          </div>
          <div className="flex items-center p-3">
            <img src={ValuesIcon} alt="" width={150} />
            <h1 className="text-center">
              Transparency, Fairness, <br /> and Fun
            </h1>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AboutLeft;
