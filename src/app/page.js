import Image from "next/image";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import { SliderData } from "./components/SliderData";

export default function Home() {
  return (
    <main>
      <Hero
        heading="Lighthouse Photography"
        message="Capturing moments today tha will wow your heart tomorrow."
      />
      <Slider slides={SliderData} />
    </main>
  );
}
