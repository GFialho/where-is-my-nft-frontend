"use client";

import Menu from "@/components/Menu";

export default function Home() {
  return (
    <div className="flex flex-col h-full items-center justify-start p-16 w-full">
      <Menu />
      <span className="py-16 text-exl">Search for an Ethereum address</span>
    </div>
  );
}
