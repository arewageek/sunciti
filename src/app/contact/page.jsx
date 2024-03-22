import { Contactbox } from "@/ui/Contactbox";
import { PagesHeader } from "@/ui/PagesHeader";
import React from "react";

export default async function Contact() {
  const url =
    "https://google-maps-geocoding.p.rapidapi.com/geocode/json?latlng=40.714224%2C-73.96145&language=en";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "7ad1513b9cmshd9132569c149ea3p1a9903jsnd17c4a801b3c",
      "X-RapidAPI-Host": "google-maps-geocoding.p.rapidapi.com",
    },
  };

  // try {
  //   const res = await fetch(url, options);

  //   console.log(await res.json());
  // } catch (error) {
  //   console.log(error);
  // }

  return (
    <div>
      <PagesHeader height={600} />

      {/* <div className="google"></div> */}

      <div className="w-full relative min-h-[200pt] mb-100pt">
        <div className="relative -top-[100pt] py-10 px-4 w-full">
          <Contactbox />
        </div>
      </div>
    </div>
  );
}
