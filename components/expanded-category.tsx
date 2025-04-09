"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";

interface ExpandedCategoryProps {
  title: string;
  icon: LucideIcon;
  count: number;
  subcategories:
    | {
        name: string;
        href: string;
      }[]
    | null;
  onBack?: () => void;
}

export function ExpandedCategory({
  title,
  icon: Icon,
  count,
  subcategories,
  onBack,
}: ExpandedCategoryProps) {
  if (!subcategories?.length) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex flex-col items-center justify-center py-8">
          <div className="mb-4">
            <Image
              src="/icons/no-subcategories.svg"
              alt="No subcategories"
              width={48}
              height={48}
              className="opacity-30"
            />
          </div>
          <p className="text-[#999999] text-sm">Подкатегорий нет</p>
          <p className="text-[#999999] text-sm">
            В этой категории нет подкатегорий
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-4 border border-[#F0F0F0]">
        <div className="flex items-center">
          <button
            onClick={onBack}
            className="bg-[#E6F0FF] p-2.5 rounded-lg mr-3.5 hover:bg-[#D9E9FF] transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-[#2680EB]" />
          </button>
          <div className="flex-1">
            <h3 className="font-medium text-[#333333] text-sm">{title}</h3>
            <p className="text-xs text-[#999999] mt-0.5">
              {count.toLocaleString()} объявлений
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {subcategories.map((subcategory) => (
            <a
              key={subcategory.href}
              href={subcategory.href}
              className="block p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors"
            >
              <span className="text-gray-900">{subcategory.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
