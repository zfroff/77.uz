"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  count: number;
  icon: LucideIcon;
  href: string;
  subcategories?: number;
  iconBgColor?: string;
  onClick?: () => void;
  isExpanded?: boolean;
}

export function CategoryCard({
  title,
  count,
  icon: Icon,
  href,
  subcategories,
  iconBgColor = "bg-[#E6F0FF]",
  onClick,
  isExpanded,
}: CategoryCardProps) {
  return (
    <button onClick={onClick} className="w-full text-left">
      <div
        className={`flex items-center p-4 rounded-lg border transition-colors ${
          isExpanded
            ? "border-blue-500 bg-blue-50"
            : "border-gray-200 hover:border-blue-500"
        }`}
      >
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center mr-3.5 ${
            isExpanded ? "bg-blue-500 text-white" : "bg-blue-50 text-blue-500"
          }`}
        >
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <div className="font-medium text-gray-900">{title}</div>
          <div className="text-sm text-gray-500">
            {subcategories
              ? `${subcategories} подкатегорий`
              : `${count.toLocaleString()} объявлений`}
          </div>
        </div>
      </div>
    </button>
  );
}
