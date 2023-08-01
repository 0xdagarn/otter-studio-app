import React, { useState, useEffect } from "react";
import Router from "next/router";

const bannerImages = [
  "http://placekitten.com/820/640",
  "http://placekitten.com/820/641",
  "http://placekitten.com/820/642",
];

export default function Home() {
  const [data, setData] = useState(null);

  return (
    <div>
      {/* GW */}
      <div class="bg-[url('/bg-sura.svg')] bg-contain flex items-center justify-center h-[947px]">
        <div class="max-w-[1200px]">
          <div class="font-normal text-[64px] text-white">
            Tears of the Antarctic
          </div>
          <div class="font-normal text-[32px] text-white max-w-[813px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut e
          </div>
          <div className="flex items-center">
            <div
              class="bg-[#FFCD4E] rounded-[56px] py-[37px] px-[24px] text-[24px] text-black font-bold"
              onClick={() => {
                Router.replace("/fundings/tears-of-the-antarctic");
              }}
            >
              More Details
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/icon_shell.svg"
                width={77}
                height={72}
                alt="Picture of the author"
              />
              <div class="font-normal text-[24px] text-white">60% Funding</div>
            </div>
            <div class="flex items-center justify-center">
              <Image
                src="/icon_otter.svg"
                width={80}
                height={62}
                alt="Picture of the author"
              />
              <div class="font-normal text-[24px] text-white">
                65 Supporters
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* JH */}
      <div class="bg-black">
        <div class="text-main-orange font-black-han-sans text-3xl font-normal leading-normal align-middle">
          Funding In Progress
        </div>
        <div class="flex text-main-orange justify-end text-center gap-[25px] font-noto-sans font-medium leading-normal text-base">
          <div class="rounded-[32px] border border-main-orange ">
            {" "}
            Ongoing Funding{" "}
          </div>
          <div class="rounded-[32px] border border-main-orange"> Nature </div>
          <div class="rounded-[32px] border border-main-orange"> Carbon </div>
          <div class="rounded-[32px] border border-main-orange">
            {" "}
            Environmental{" "}
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="image">
              <img
                key={index}
                src={image.imageUrl}
                alt={`Image ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
        <div class="text-main-orange font-black-han-sans text-4xl font-normal leading-normal">
          Nature And People
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-x-scroll">
          {images.map((image, index) => (
            <div key={index} className="image">
              <img
                key={index}
                src={image.imageUrl}
                alt={`Image ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
