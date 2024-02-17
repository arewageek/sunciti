import { Header } from "@/ui/Header";
import { MeetMainone } from "@/ui/MeetMainone";
import { ServicesSlider } from "@/ui/ServicesSlider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Header />

      <MeetMainone />

      {/* <ServicesSlider /> */}
    </main>
  );
}
