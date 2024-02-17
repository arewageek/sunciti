import { Header } from "@/ui/Header";
import { MeetMainone } from "@/ui/MeetMainone";
import { MoreOnMainone } from "@/ui/MoreOnMainone";
import { ServicesSlider } from "@/ui/ServicesSlider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Header />

      <MeetMainone />

      {/* <ServicesSlider /> */}

      <MoreOnMainone />
    </main>
  );
}
