"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [visibleProducts, setVisibleProducts] = useState(16);
  const productsPerPage = 16;
  const [isLoading, setIsLoading] = useState(false);

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
    {
      id: "17",
      title: "Sony WH-1000XM5",
      image:
        "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=1000&auto=format&fit=crop",
      price: 3200000,
      currency: "UZS",
      location: "г. Ташкент",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
    {
      id: "18",
      title: "iPad Pro 12.9 M2",
      image:
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1000&auto=format&fit=crop",
      price: 18500000,
      currency: "UZS",
      location: "г. Ташкент",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
    {
      id: "19",
      title: "Canon EOS R5",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
      price: 42000000,
      currency: "UZS",
      location: "г. Самарканд",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
    {
      id: "20",
      title: "Rolex Submariner",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
      price: 85000000,
      currency: "UZS",
      location: "г. Ташкент",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
    {
      id: "21",
      title: "Tesla Model 3",
      image:
        "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=1000&auto=format&fit=crop",
      price: 450000000,
      currency: "UZS",
      location: "г. Ташкент",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
    {
      id: "22",
      title: "Gaming PC RTX 4090",
      image:
        "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?q=80&w=1000&auto=format&fit=crop",
      price: 35000000,
      currency: "UZS",
      location: "г. Ташкент",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
    {
      id: "23",
      title: "Hermès Birkin Bag",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop",
      price: 95000000,
      currency: "UZS",
      location: "г. Ташкент",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
    {
      id: "24",
      title: "Yamaha Grand Piano",
      image:
        "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=1000&auto=format&fit=crop",
      price: 125000000,
      currency: "UZS",
      location: "г. Самарканд",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
    {
      id: "25",
      title: "Leica M11",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
      price: 85000000,
      currency: "UZS",
      location: "г. Ташкент",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
    {
      id: "26",
      title: "Bang & Olufsen Beolab 90",
      image:
        "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=1000&auto=format&fit=crop",
      price: 65000000,
      currency: "UZS",
      location: "г. Ташкент",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
    {
      id: "27",
      title: "Trek Madone SLR",
      image:
        "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=1000&auto=format&fit=crop",
      price: 28000000,
      currency: "UZS",
      location: "г. Самарканд",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
    {
      id: "28",
      title: "Omega Speedmaster",
      image:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1000&auto=format&fit=crop",
      price: 45000000,
      currency: "UZS",
      location: "г. Ташкент",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
    {
      id: "29",
      title: "Dyson V15 Detect",
      image:
        "https://images.unsplash.com/photo-1616628188859-7b11abb57b5e?q=80&w=1000&auto=format&fit=crop",
      price: 8500000,
      currency: "UZS",
      location: "г. Ташкент",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
    {
      id: "30",
      title: "Samsung QN900B Neo QLED",
      image:
        "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=1000&auto=format&fit=crop",
      price: 25000000,
      currency: "UZS",
      location: "г. Ташкент",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
    {
      id: "31",
      title: "Bose QuietComfort Ultra",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
      price: 4200000,
      currency: "UZS",
      location: "г. Ташкент",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
    {
      id: "32",
      title: "Mac Studio M2 Ultra",
      image:
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1000&auto=format&fit=crop",
      price: 85000000,
      currency: "UZS",
      location: "г. Ташкент",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
    {
      id: "33",
      title: "Garmin Fenix 7X",
      image:
        "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1000&auto=format&fit=crop",
      price: 5800000,
      currency: "UZS",
      location: "г. Самарканд",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
    {
      id: "34",
      title: "Sonos Arc",
      image:
        "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=1000&auto=format&fit=crop",
      price: 4200000,
      currency: "UZS",
      location: "г. Ташкент",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
    {
      id: "35",
      title: "Nintendo Switch OLED",
      image:
        "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?q=80&w=1000&auto=format&fit=crop",
      price: 3200000,
      currency: "UZS",
      location: "г. Ташкент",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
    {
      id: "36",
      title: "DJI Mini 3 Pro",
      image:
        "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1000&auto=format&fit=crop",
      price: 8500000,
      currency: "UZS",
      location: "г. Ташкент",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
    {
      id: "37",
      title: "Kindle Oasis",
      image:
        "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?q=80&w=1000&auto=format&fit=crop",
      price: 2800000,
      currency: "UZS",
      location: "г. Самарканд",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
    {
      id: "38",
      title: "GoPro Hero 11 Black",
      image:
        "https://images.unsplash.com/photo-1575732752612-33c45d0b2d65?q=80&w=1000&auto=format&fit=crop",
      price: 4200000,
      currency: "UZS",
      location: "г. Ташкент",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
    {
      id: "39",
      title: "Microsoft Surface Laptop Studio",
      image:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop",
      price: 25000000,
      currency: "UZS",
      location: "г. Ташкент",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
    {
      id: "40",
      title: "Sony A7 IV",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
      price: 28000000,
      currency: "UZS",
      location: "г. Ташкент",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
    {
      id: "41",
      title: "Apple Vision Pro",
      image:
        "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=1000&auto=format&fit=crop",
      price: 35000000,
      currency: "UZS",
      location: "г. Ташкент",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
    {
      id: "42",
      title: "Brompton P Line",
      image:
        "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=1000&auto=format&fit=crop",
      price: 8500000,
      currency: "UZS",
      location: "г. Самарканд",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
    {
      id: "43",
      title: "Hasselblad X2D",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
      price: 95000000,
      currency: "UZS",
      location: "г. Ташкент",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
    {
      id: "44",
      title: "Meta Quest 3",
      image:
        "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=1000&auto=format&fit=crop",
      price: 4200000,
      currency: "UZS",
      location: "г. Ташкент",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
    {
      id: "45",
      title: "Steam Deck OLED",
      image:
        "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?q=80&w=1000&auto=format&fit=crop",
      price: 5800000,
      currency: "UZS",
      location: "г. Ташкент",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
    {
      id: "46",
      title: "Fujifilm GFX 100S",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
      price: 85000000,
      currency: "UZS",
      location: "г. Ташкент",
      timestamp: "Вчера, 19:20",
      phone: "+998 71 200 70 07",
    },
  ];

  const handleLoadMore = () => {
    setIsLoading(true);
    setVisibleProducts((prev) =>
      Math.min(prev + productsPerPage, listings.length)
    );
    // Simulate a small delay for the animation
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

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
          <AnimatePresence>
            {listings.slice(0, visibleProducts).map((listing, index) => (
              <motion.div
                key={listing.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay:
                    index >= visibleProducts - productsPerPage
                      ? (index - (visibleProducts - productsPerPage)) * 0.05
                      : 0,
                }}
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
                    <div className="text-xs text-[#666666]">
                      {listing.phone}
                    </div>
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
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {visibleProducts < listings.length && (
          <div className="flex justify-center mt-8">
            <motion.button
              onClick={handleLoadMore}
              type="button"
              className="h-12 px-6 rounded-full bg-[#EAEDF0] text-[#333333] font-medium hover:bg-gray-100 transition-colors inline-flex items-center gap-2 border border-[#CCC]"
              whileTap={{ scale: 0.95 }}
              disabled={isLoading}
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-[#333333] border-t-transparent rounded-full"
                />
              ) : (
                <>
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
                </>
              )}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
