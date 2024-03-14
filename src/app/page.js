import Image from "next/image";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import { SliderData } from "./components/SliderData";
import Instagram from "./components/Instagram";

export default function Home() {
  return (
    <main>
      <Hero
        heading="Lighthouse Photography"
        message="Capturing moments today that will wow you tomorrow."
      />
      <Slider slides={SliderData} />
      <Instagram />
    </main>
  );
}
