import React, { useState, useEffect } from "react";
import Image from "next/image";
import Router from "next/router";

const bannerImages = [
  "http://placekitten.com/820/640",
  "http://placekitten.com/820/641",
  "http://placekitten.com/820/642",
];

const fundings = [
  { key: "6", imageUrl: "/video-6.jpg" },
  { key: "7", imageUrl: "/video-7.jpg" },
];

const nature = [
  { key: "1", imageUrl: "/video-1.jpeg" },
  { key: "2", imageUrl: "/video-2.jpg" },
  { key: "5", imageUrl: "/video-5.jpg" },
  { key: "8", imageUrl: "/video-8.jpg" },
  { key: "9", imageUrl: "/video-9.jpg" },
];

const people = [
  { key: "10", imageUrl: "/video-10.jpg" },
  { key: "11", imageUrl: "/video-11.jpg" },
];

export default function Home() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/data");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      {/* GW */}
      <div class="bg-[url('/bg-sura.svg')] bg-contain flex items-center justify-center h-screen">
        <div class="w-[80%]">
          <div class="font-normal text-[64px] text-white pt-[200px]">
            Tears of the Antarctic
          </div>
          <div class="font-normal text-[32px] text-white max-w-[800px] pt-4">
            The last continent on the planet that remains untouched. But
            Antarctica is melting. The place possesses key indicators on climate
            change and possible solutions. The world is now turning its
            attention to Antarctica.
          </div>
          <div className="flex items-center pt-12">
            <div
              class="bg-[#FFCD4E] rounded-[56px] py-[37px] px-[24px] text-[24px] text-black font-bold hover:cursor-pointer"
              onClick={() => {
                Router.replace("/fundings/tears-of-the-antarctic");
              }}
            >
              More Details
            </div>
            <div className="flex items-center justify-center px-8">
              <Image
                src="/icon_shell.svg"
                width={77}
                height={72}
                alt="Picture of the author"
              />
              <div class="font-normal text-[24px] text-white pl-3">
                75% Funding
              </div>
            </div>
            <div class="flex items-center justify-center">
              <Image
                src="/icon_otter.svg"
                width={80}
                height={62}
                alt="Picture of the author"
              />
              <div class="font-normal text-[24px] text-white pl-3">
                85 Supporters
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* JH */}
      <div class="bg-black px-7 pb-[100px]">
        <div class="flex justify-between py-[50px]">
          <div class="text-main-orange font-black-han-sans text-3xl font-normal leading-normal align-middle">
            Funding In Progress
          </div>
          <div class="flex text-main-orange justify-end text-center gap-[25px] font-noto-sans font-medium leading-normal text-base">
            <div class="rounded-[32px] border border-main-orange p-2 flex items-center justify-center">
              Funding In Progress
            </div>
            <div class="rounded-[32px] border border-main-orange flex items-center justify-center p-2">
              Nature And Carbon
            </div>
            <div class="rounded-[32px] border border-main-orange flex items-center justify-center p-2">
              People
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4">
          {fundings.map((image, index) => (
            <div
              key={index}
              className="image hover:cursor-pointer"
              onClick={() =>
                alert("This documentary is being prepared for screening.")
              }
            >
              <img
                class="w-full h-auto rounded-[20px]"
                key={index}
                src={image.imageUrl}
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <div class="text-main-orange font-black-han-sans text-4xl font-normal leading-normal pt-[40px] pb-[20px]">
          Nature And Carbon
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4 overflow-x-scroll">
          {nature.map((image, index) => (
            <div
              key={index}
              className="image hover:cursor-pointer"
              onClick={() =>
                alert("This documentary is being prepared for screening.")
              }
            >
              <img
                class="w-full h-auto rounded-[20px]"
                key={index}
                src={image.imageUrl}
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <div class="text-main-orange font-black-han-sans text-4xl font-normal leading-normal pt-[40px] pb-[20px]">
          People
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4 overflow-x-scroll">
          {people.map((image, index) => (
            <div
              key={index}
              className="image hover:cursor-pointer"
              onClick={() =>
                alert("This documentary is being prepared for screening.")
              }
            >
              <img
                class="w-full h-auto rounded-[20px]"
                key={index}
                src={image.imageUrl}
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
