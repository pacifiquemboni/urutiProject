import Casinos from "../../../assets/newassets/menu-img-casinos.png";
const OnlineCasinos = () => {
  return (
    <div className="flex flex-row text-black justify-evenly py-10">
      <div>
        <p className="text-[#4a5b68]">Online casinos</p>
        <div className="pt-5 text-green-500">
          <p>Top online casinos</p>
          <p>Newly opened casinos</p>
          <p>Big brands</p>
          <p>All casinos</p>
        </div>
      </div>
      <div>
        <p className="text-[#4a5b68]">Popular filters</p>
        <div className="pt-5 text-green-500">
          <p>Mobile-friendly casinos</p>
          <p>Crypto casinos</p>
          <p>Best slots sites</p>
          <p>Real money gambling sites</p>
          <p>Casino reviews</p>
          <p>High roller VIP casinos</p>
          <p>Live dealer casinos</p>
        </div>
      </div>
      <div>
        <p className="text-[#4a5b68]">Casinos by payment method</p>
        <div className="pt-5 text-green-500">
          <p>PaySafeCard casinos</p>
          <p>iDEAL casinos</p>
          <p>Neteller casinos</p>
          <p>Trustly casinos</p>
          <p>Sofort Banking casinos</p>
          <p>All payment methods</p>
        </div>
      </div>
      <div>
        <img src={Casinos} alt="" />
      </div>
    </div>
  );
};

export default OnlineCasinos;
