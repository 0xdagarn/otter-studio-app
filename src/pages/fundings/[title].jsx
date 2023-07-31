import { useState, useEffect } from "react";
import Image from "next/image";
import Router from "next/router";

import { ethers } from "ethers";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";

import DocumentaryProducerPassABI from "../../contracts/abis/DocumentaryProducerPassABI.json";
import { DocumentaryProducerPassAddress } from "../../contracts/address.json";

const FundingSuccessModal = ({ isOpenModal }) => {
  return (
    <div>
      {isOpenModal && (
        <div>
          <div
            className="relative z-10"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div class="flex flex-col items-center justify-center p-6 bg-[#081521]">
                    <Image
                      src="/dummy/funding-success-modal.png"
                      width={680}
                      height={933}
                      alt="Picture of the author"
                    />
                    <button
                      class="bg-[#ffcd4e] rounded-[56px] px-[16px] py-[24px] text-18 font-bold uppercase"
                      onClick={() => {
                        Router.replace("/scenes/tears-of-the-antarctic");
                      }}
                    >
                      Go to behind the scene
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const FundingModal = ({ isOpenModal, setIsOpenModal, write }) => {
  return (
    <div>
      {isOpenModal && (
        <div>
          <div
            className="relative z-10"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div class="flex flex-col items-center justify-center p-6 bg-[#081521]">
                    <Image
                      src="/dummy/modal-funding.png"
                      width={680}
                      height={933}
                      alt="Picture of the author"
                    />
                    <button
                      class="bg-[#ffcd4e] rounded-[56px] px-[16px] py-[24px] text-18 font-bold uppercase"
                      onClick={() => {
                        if (write) write();
                      }}
                    >
                      SUPPORT THIS PROJECT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function Funding() {
  const [isOpenFundingModal, setIsOpenFunginModal] = useState(false);
  const [isOpenFundingSuccessModal, setIsOpenFunginSuccessModal] =
    useState(false);

  const price = ethers.parseEther("0.1");

  const { config } = usePrepareContractWrite({
    address: DocumentaryProducerPassAddress,
    abi: DocumentaryProducerPassABI,
    functionName: "mintProducerPass",
    args: [1, 1],
    // enabled: Boolean(title),
    value: price,
  });
  const { data, write } = useContractWrite(config);

  const { isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  useEffect(() => {
    if (isSuccess) {
      setIsOpenFunginModal(false);
      setIsOpenFunginSuccessModal(true);
    }
  }, [isSuccess]);

  return (
    <div class="bg-[#081521] pb-[400px]">
      <FundingModal isOpenModal={isOpenFundingModal} write={write} />
      <FundingSuccessModal isOpenModal={isOpenFundingSuccessModal} />
      <div class="bg-[url('/bg-funding-detail.svg')] bg-cover flex items-center justify-center h-[392px] font-normal text-[64px] text-white">
        Tears of the Antarctic
      </div>
      <div class="flex gap-24 items-center justify-center">
        <div>
          <Image
            class="mt-28"
            src="/dummy/img-left-funding.png"
            width={700}
            height={644}
            alt="Picture of the author"
          />
        </div>
        <div class="flex flex-col items-center justify-center">
          <Image
            src="/dummy/img-right-funding.png"
            width={332}
            height={644}
            alt="Picture of the author"
          />
          <button
            class="bg-[#ffcd4e] rounded-[56px] px-[16px] py-[24px] text-18 font-bold uppercase mt-[-35px]"
            onClick={() => {
              setIsOpenFunginModal(true);
            }}
          >
            SUPPORT THIS PROJECT
          </button>
        </div>
      </div>
    </div>
  );
}
