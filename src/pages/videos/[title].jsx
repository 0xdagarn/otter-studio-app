import { useState, useEffect } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import Router from "next/router";

import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";

import GateABI from "../../contracts/abis/GateABI.json";
import { GateAddress } from "../../contracts/address.json";

const VotingSuccessModal = ({
  isOpenModal,
  setIsOpenFunginModal,
  isLoading,
  write,
}) => {
  const [voteOption, setVoteOption] = useState(0);

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
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
                  <div class="flex flex-col items-center justify-center p-12 bg-[#051b2f]">
                    <Image
                      class="absolute right-6 top-6 hover:cursor-pointer"
                      src="/close-btn.svg"
                      width={16}
                      height={16}
                      onClick={() => setIsOpenFunginModal(false)}
                    />
                    <div class="flex items-center justify-center gap-[72px]">
                      <div class="flex flex-col items-center justify-center">
                        <div class="font-normal text-[40px] text-[#FFCD4E]">
                          Thank you for your vote!
                        </div>
                        <div class="font-normal text-[24px] text-white mb-[24px]">
                          Here's the voting status
                        </div>
                        <Image
                          src="/voting-result.png"
                          width={616}
                          height={639}
                          alt="Picture of the author"
                        />
                      </div>
                      <div class="flex flex-col justify-center items-center">
                        <div class="font-normal text-[32px] text-[#FFCD4E]">
                          Be the Change
                        </div>
                        <div class="font-normal text-[24px] text-white">
                          Join our next Joruney by
                        </div>
                        <div
                          class="rounded-[30px] text-[#FFCD4E] border-2 border-[#FFCD4E] hover:cursor-pointer px-[24px] py-[16px] mt-[36px] flex justify-center"
                          onClick={() =>
                            Router.replace("/scenes/tears-of-the-antarctic")
                          }
                        >
                          Support Chapter 2
                        </div>
                      </div>
                    </div>
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

const VotingModal = ({
  isOpenModal,
  setIsOpenFunginModal,
  isLoading,
  write,
}) => {
  const [voteOption, setVoteOption] = useState(0);

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
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
                  <div class="flex flex-col items-center justify-center p-12 bg-[#051b2f]">
                    <Image
                      class="absolute right-6 top-6 hover:cursor-pointer"
                      src="/close-btn.svg"
                      width={16}
                      height={16}
                      onClick={() => setIsOpenFunginModal(false)}
                    />
                    <Image
                      src="/voting-chapter-2.png"
                      width={582}
                      height={933}
                      alt="Picture of the author"
                    />
                    <div class="flex gap-[20px] mt-[24px]">
                      <div class="flex flex-col items-center hover:text-[#FFCD4E]">
                        <Image
                          class="rounded-2xl hover:border-[#FFCD4E] hover:border-[3px] hover:cursor-pointer"
                          src="/ChinstrapPenguin.png"
                          width={268}
                          height={435}
                          onClick={() => setVoteOption(1)}
                        />
                        <div
                          class={`font-normal text-[20px] text-white p-3 ${
                            voteOption === 1 ? "text-[#FFCD4E]" : ""
                          }`}
                        >
                          Chinstrap Penguin
                        </div>
                      </div>
                      <div class="flex flex-col items-center">
                        <Image
                          class="rounded-2xl hover:border-[#FFCD4E] hover:border-[3px] hover:cursor-pointer"
                          src="/EmperorPenguin.png"
                          width={268}
                          height={435}
                          onClick={() => setVoteOption(2)}
                        />
                        <div
                          class={`font-normal text-[20px] text-white p-3 ${
                            voteOption === 2 ? "text-[#FFCD4E]" : ""
                          }`}
                        >
                          Emperor Penguin
                        </div>
                      </div>
                      <div class="flex flex-col items-center">
                        <Image
                          class="rounded-2xl hover:border-[#FFCD4E] hover:border-[3px] hover:cursor-pointer"
                          src="/RockhopperPenguin.png"
                          width={268}
                          height={435}
                          onClick={() => setVoteOption(3)}
                        />
                        <div
                          class={`font-normal text-[20px] text-white p-3 ${
                            voteOption === 3 ? "text-[#FFCD4E]" : ""
                          }`}
                        >
                          Rockhopper Penguin
                        </div>
                      </div>
                    </div>
                    <div
                      disabled={voteOption === 0 || !write || isLoading}
                      class="rounded-[30px] text-[#FFCD4E] border-2 border-[#FFCD4E] hover:cursor-pointer px-[24px] py-[16px] mt-[36px]"
                      onClick={() => write()}
                    >
                      {isLoading ? "Voting..." : "Vote"}
                    </div>
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

export default function Scene() {
  const [isOpenVotingModal, setIsOpenVotingModal] = useState(false);
  const [isOpenVotingSuccessModal, setIsOpenVotingSuccessModal] =
    useState(false);
  const [hasWindow, setHasWindow] = useState(false);

  // should call setApprovalForAll before
  const { config } = usePrepareContractWrite({
    address: GateAddress,
    abi: GateABI,
    functionName: "stakeProducerPassAndVote",
    args: [1, 1, 1],
  });
  const { data, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  useEffect(() => {
    if (isSuccess) {
      setIsOpenVotingModal(false);
      setIsOpenVotingSuccessModal(true);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <div class="bg-[#041522] min-h-screen flex items-center justify-center">
      <VotingModal
        isOpenModal={isOpenVotingModal}
        setIsOpenFunginModal={setIsOpenVotingModal}
        isLoading={isLoading}
        write={write}
      />
      <VotingSuccessModal
        isOpenModal={isOpenVotingSuccessModal}
        setIsOpenFunginModal={setIsOpenVotingSuccessModal}
        isLoading={isLoading}
        write={write}
      />
      {hasWindow && (
        <ReactPlayer
          url="https://giistyxelor.s3.amazonaws.com/giists/video/video0cP3w019TiZYYcUy22WY.mp4"
          width="85%"
          height="90%"
          playing={true}
          muted={true}
          onEnded={() => setIsOpenVotingModal(true)}
        />
      )}
    </div>
  );
}
