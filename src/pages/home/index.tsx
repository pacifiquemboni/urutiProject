import AboutUsSection from "./aboutus";
import ContactSection from "./contact";
import WelcomeSection from "./hero";
import ParticipateSection from "./participate";
import PrizeSection from "./prizes";

export default function HomePage() {
  return (
    <>
      <WelcomeSection />
      <ParticipateSection />
      {/* <LiveSection /> */}
      <PrizeSection />
      <AboutUsSection />
      <ContactSection />
    </>
  );
}
