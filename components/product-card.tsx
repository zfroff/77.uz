"use client";

import { Heart } from "lucide-react";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  currency: string;
  image: string;
  location: string;
  date: string;
  phone: string;
  category?: string;
}

export function ProductCard({
  id,
  title,
  price,
  currency,
  image,
  location,
  date,
  phone,
  category,
}: ProductCardProps) {
  const formatPrice = (price: number, currency: string) => {
    if (currency.toLowerCase() === "usd") {
      return `${price} USD`;
    }
    return `${price.toLocaleString()} UZS`;
  };

  return (
    <Link href={`/product/${id}`} className="block">
      <div className="bg-white rounded-lg overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-shadow border border-[#F0F0F0] group">
        <div className="relative">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-48 object-cover"
          />
          <button
            className="absolute top-3 right-3 bg-white p-1.5 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={(e) => {
              e.preventDefault();
              // Add to favorites logic here
            }}
          >
            <Heart className="h-5 w-5 text-[#CCCCCC] hover:text-[#FF4D4D] transition-colors" />
          </button>
          {category && (
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-[2px] px-2.5 py-1 rounded text-xs text-[#666666] font-medium">
              {category}
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-medium text-sm mb-2 line-clamp-2 h-10 text-[#333333] leading-5">
            {title}
          </h3>
          <div className="flex items-center text-xs text-[#999999] mb-1.5 space-x-1.5">
            <span>{location}</span>
            <span>•</span>
            <span>{date}</span>
          </div>
          <div className="text-xs text-[#999999] mb-3 flex items-center">
            <svg
              className="h-3.5 w-3.5 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            {phone}
          </div>
          <div className="font-bold text-[#333333] text-base">
            {formatPrice(price, currency)}
          </div>
        </div>
      </div>
    </Link>
  );
}
