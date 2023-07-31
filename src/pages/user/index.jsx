import { useState, useEffect } from "react";
import { readContract } from "@wagmi/core";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { useDebounce } from "@uidotdev/usehooks";

import NSetterABI from "../../contracts/abis/NSetter.json";
const contract = "0x5fbdb2315678afecb367f032d93f642f64180aa3";

function Form({ getN }) {
  const [newN, setNewN] = useState("");
  const debouncedNewN = useDebounce(newN, 500);

  const { config } = usePrepareContractWrite({
    address: contract,
    abi: NSetterABI,
    functionName: "setN",
    args: [parseInt(debouncedNewN)],
    enabled: Boolean(debouncedNewN),
  });
  const { data, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  useEffect(() => {
    getN();
  }, [isSuccess]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        write?.();
      }}
    >
      <label htmlFor="n">N</label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="n"
        type="number"
        placeholder="Please input your N"
        onChange={(e) => setNewN(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        disabled={!write || isLoading}
      >
        {isLoading ? "Minting..." : "Mint"}
      </button>
      {isSuccess && (
        <div>
          Successfully minted your NFT!
          <div>
            <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
          </div>
        </div>
      )}
    </form>
  );
}

export default function UserPage() {
  const [n, setN] = useState("");

  const getN = async () => {
    const config = {
      address: contract,
      abi: NSetterABI,
      functionName: "getN",
    };

    const n = await readContract(config);
    setN(n.toString());
  };

  useEffect(() => {
    getN();
  }, []);

  return (
    <div>
      <Form getN={getN} />
      <h1>Current N: {n}</h1>
    </div>
  );
}
