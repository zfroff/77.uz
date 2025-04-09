"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

interface Listing {
  id: string;
  title: string;
  image: string;
  price: number;
  currency: "UZS" | "USD";
  location: string;
  timestamp: string;
  phone: string;
}

export function ListingsSection() {
  // This would typically come from an API
  const listings: Listing[] = [
    {
      id: "1",
      title: "Кепки Corneliani Diamond for him edition.",
      image:
        "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1000&auto=format&fit=crop",
      price: 2599000,
      currency: "UZS",
      location: "г. Ташкент",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
    {
      id: "2",
      title: "Chevrolet Onix 1.2 Turbo в наличии",
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop",
      price: 204000000,
      currency: "UZS",
      location: "г. Самарканд",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
    {
      id: "3",
      title: "7Saber Trucker Cap",
      image:
        "https://images.unsplash.com/photo-1534215754734-18e55d13e346?q=80&w=1000&auto=format&fit=crop",
      price: 280000,
      currency: "UZS",
      location: "г. Ташкент",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
    {
      id: "4",
      title: "Оригинальные кроссовки Nike Air Max Plus",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop",
      price: 4820000,
      currency: "UZS",
      location: "г. Ташкент",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
    {
      id: "5",
      title: "Оригинальные кроссовки Nike Air Max 97",
      image:
        "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=1000&auto=format&fit=crop",
      price: 4820000,
      currency: "UZS",
      location: "г. Ташкент",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
    {
      id: "6",
      title: "Apple Watch Series 8 - USA Non active",
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1000&auto=format&fit=crop",
      price: 4500000,
      currency: "UZS",
      location: "г. Ташкент",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
    {
      id: "7",
      title: "Лучший кроссовер Geely Monjaro Limited Edition",
      image:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1000&auto=format&fit=crop",
      price: 320000000,
      currency: "UZS",
      location: "г. Самарканд",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
    {
      id: "8",
      title: "Стайлер для волос Dyson airwrap complete long",
      image:
        "https://images.unsplash.com/photo-1522338140262-f46f5913618a?q=80&w=1000&auto=format&fit=crop",
      price: 500,
      currency: "USD",
      location: "г. Ташкент",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
    {
      id: "9",
      title: "Samsung Galaxy S24 Ultra - 1TB",
      image:
        "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1000&auto=format&fit=crop",
      price: 19500000,
      currency: "UZS",
      location: "г. Ташкент",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
    {
      id: "10",
      title: "MacBook Pro 16' M3 Max",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop",
      price: 52000000,
      currency: "UZS",
      location: "г. Ташкент",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
    {
      id: "11",
      title: "Кожаная сумка Louis Vuitton",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop",
      price: 8500000,
      currency: "UZS",
      location: "г. Самарканд",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
    {
      id: "12",
      title: "PlayStation 5 + 2 DualSense",
      image:
        "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=1000&auto=format&fit=crop",
      price: 8200000,
      currency: "UZS",
      location: "г. Ташкент",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
    {
      id: "13",
      title: "iPhone 15 Pro Max 1TB",
      image:
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1000&auto=format&fit=crop",
      price: 18500000,
      currency: "UZS",
      location: "г. Ташкент",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
    {
      id: "14",
      title: "Велосипед Giant Trance X",
      image:
        "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?q=80&w=1000&auto=format&fit=crop",
      price: 15800000,
      currency: "UZS",
      location: "г. Самарканд",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
    {
      id: "15",
      title: "DJI Mavic 3 Pro Combo",
      image:
        "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1000&auto=format&fit=crop",
      price: 12500000,
      currency: "UZS",
      location: "г. Ташкент",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
    {
      id: "16",
      title: "Кофемашина Delonghi Primadonna",
      image:
        "https://images.unsplash.com/photo-1517914309068-900c5bca33b6?q=80&w=1000&auto=format&fit=crop",
      price: 9800000,
      currency: "UZS",
      location: "г. Ташкент",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
  ];

  return (
    <section className="bg-[#F7F8FA] py-12">
      <div className="container mx-auto px-4 mb-20">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-black mb-2">Объявления</h1>
          <p className="text-[#666666]">
            Вы можете найти все категории, которые вам нужны от покупателя
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 group hover:shadow-md transition-shadow duration-200"
            >
              <div className="relative aspect-square">
                <Image
                  src={listing.image || "/icons/no-image.svg"}
                  alt={listing.title}
                  fill
                  className={`object-${
                    listing.image ? "cover" : "contain"
                  } bg-[#F7F8FA]`}
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.src = "/icons/no-image.svg";
                    img.className = img.className.replace(
                      "object-cover",
                      "object-contain"
                    );
                  }}
                />
                <button
                  type="button"
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center transition-colors hover:bg-gray-50"
                >
                  <Heart className="w-5 h-5 text-[#666666]" />
                </button>
              </div>
              <div className="p-3">
                <div className="inline-block px-2 py-1 bg-[#F7F8FA] rounded text-xs text-[#666666] mb-2">
                  {listing.location}
                </div>
                <Link
                  href={`/listings/${listing.id}`}
                  className="block text-sm font-medium text-black hover:text-[#2680EB] transition-colors line-clamp-2 mb-2"
                >
                  {listing.title}
                </Link>
                <div className="text-xs text-[#666666] mb-3">
                  {listing.timestamp}
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="text-xs text-[#666666]">{listing.phone}</div>
                  <button
                    type="button"
                    className="w-4 h-4 rounded bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-[#666666]"
                    >
                      <path
                        d="M10.5 8.5L8.5 10.5M1.5 1.5H4.5V4.5H1.5V1.5ZM7.5 1.5H10.5V4.5H7.5V1.5ZM1.5 7.5H4.5V10.5H1.5V7.5Z"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="text-lg font-bold">
                  {listing.price.toLocaleString()}{" "}
                  <span className="text-[#2680EB]">{listing.currency}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button
            type="button"
            className="h-12 px-6 rounded-full bg-[#EAEDF0] text-[#333333] font-medium hover:bg-gray-100 transition-colors inline-flex items-center gap-2 border border-[#CCC] "
          >
            Загрузить больше
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative top-[1px]"
            >
              <path
                d="M4 6L8 10L12 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
