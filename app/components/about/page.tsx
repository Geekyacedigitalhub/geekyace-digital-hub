import AboutHero from "./AboutHero";
import OurStory from "./OurStory";
import CoreValues from "./CoreValues";
import Achievements from "./Achievements";
import Technologies from "./Technologies";
import FounderProfile from "./FounderProfile";
import Team from "./Team";
import CTA from "./CTA";

export default function About() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <CoreValues />
      <Achievements />
      <Technologies />

      {/* Founder */}
      <FounderProfile />

      {/* Team */}
      <Team />

      <CTA />
    </>
  );
}