"use client";

import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center justify-center">
      <div className="bg-[#2680EB] text-white font-bold text-2xl px-5 py-2.5 rounded-md border-2 border-white shadow-[0_2px_10px_rgba(0,0,0,0.15)]">
        77.uz
      </div>
    </Link>
  );
}
