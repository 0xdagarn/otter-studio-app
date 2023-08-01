import Image from "next/image";
import Router from "next/router";

export default function Scene() {
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
          WATCH CHATER 1
        </button>
      </div>
      <div class="pl-[100px]">
        <div class="font-normal text-[32px] text-[#FFCD4E] pt-[100px] mb-[70px]">
          Behind the scene
        </div>
        <Image
          src="/bhs-1.png"
          width={484}
          height={644}
          alt="Picture of the author"
        />
      </div>
      <div></div>
    </div>
  );
}
