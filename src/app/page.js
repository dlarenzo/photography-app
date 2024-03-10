import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <Hero
        heading="Lighthouse Photography"
        message="Capturing moments today tha will wow your heart tomorrow."
      />
    </main>
  );
}
