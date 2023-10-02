"use client";

import Link from "next/link";
import { useState } from "react";
import { useAccount } from "wagmi";
import searchIcon from "../../../assets/icons/search.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Menu() {
  const { address } = useAccount();
  const [searchText, setSearchText] = useState<string>("");

  const router = useRouter();

  return (
    <div className="min-w-screen p-4 w-full text-black font-bold ">
      <div className="flex flex-row justify-around">
        <div className="flex justify-between shadow-md rounded-md p-2 w-96">
          <input
            type="text"
            placeholder="Search address"
            onChange={(event) => setSearchText(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                router.push(searchText);
              }
            }}
            className="w-full"
          ></input>
          <button
            onClick={() => {
              router.push(searchText);
            }}
          >
            <Image src={searchIcon} height={24} width={24} alt="Search Icon" />
          </button>
        </div>
        <div className="flex justify-center">
          <div className="">
            {address && (
              <div>
                <Link href={`/gallery/${address}`} className="self-start px-2">
                  <span>My Assets</span>
                </Link>
                <Link href={"/configuration"} className="self-start px-2">
                  <span>Configuration</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
