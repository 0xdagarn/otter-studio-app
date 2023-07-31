import Image from "next/image";
import Router from "next/router";

export default function Scene() {
  return (
    <div>
      <div>
        <button
          class="bg-[#ffcd4e] rounded-[56px] px-[16px] py-[24px] text-18 font-bold uppercase"
          onClick={() => {
            Router.replace("/videos/tears-of-the-antarctic");
          }}
        >
          WATCH CHATER 1
        </button>
      </div>
      <div>
        <Image
          src="/dummy/scencs.png"
          width={1000}
          height={644}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}
