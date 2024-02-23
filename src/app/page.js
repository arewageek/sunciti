import { BusinessStats } from "@/ui/BusinessStats";
import { CallToAction } from "@/ui/CallToAction";
import { FAQ } from "@/ui/FAQ";
import { Header } from "@/ui/Header";
import { MeetMainone } from "@/ui/MeetMainone";
import { MoreOnMainone } from "@/ui/MoreOnMainone";
import { RequestQuote } from "@/ui/RequestQuote";
import { ServicesSlider } from "@/ui/ServicesSlider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Header />

      <MeetMainone />

      {/* <ServicesSlider /> */}

      <MoreOnMainone />

      <CallToAction />

      <BusinessStats />

      <RequestQuote />

      <FAQ />
      
    </main>
  );
}
