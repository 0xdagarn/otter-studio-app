import Image from "next/image";
import Router from "next/router";
import { useState } from "react";

export default function Scene() {
  const [isFunded, setIsFunded] = useState(false);

  return (
    <div class="bg-[#041522] pb-[100px]">
      <div class="bg-[url('/header.svg')] bg-contain items-center justify-center font-normal pt-[150px] pb-[80px] pl-[200px]">
        <div class="text-[64px] text-white ">Tears of the Antarctic</div>
        <button
          class="bg-[#ffcd4e] rounded-[56px] px-[16px] py-[24px] text-18 font-bold uppercase mt-[24px]"
          onClick={() => {
            Router.replace("/videos/tears-of-the-antarctic");
          }}
        >
          {!isFunded ? "Watch Trailer" : "WATCH CHATER 1"}
        </button>
      </div>
      <div class="pl-[100px]">
        <div
          class="font-normal text-[32px] text-[#FFCD4E] pt-[100px] mb-[70px]"
          onClick={() => setIsFunded(!isFunded)}
        >
          Behind the scene
        </div>
        {!isFunded ? (
          <Image
            src="/bhs-1.png"
            width={484}
            height={644}
            alt="Picture of the author"
          />
        ) : (
          <Image
            src="/bhs-full.png"
            width={1460}
            height={644}
            alt="Picture of the author"
          />
        )}
      </div>
      <div></div>
    </div>
  );
}
