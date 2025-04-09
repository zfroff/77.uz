"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Heart, LogIn } from "lucide-react";
import { Search } from "./search";

interface Language {
  code: string;
  name: string;
  flag: string;
}

export function Header() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>({
    code: "ru",
    name: "Русский",
    flag: "/flags/ru.svg",
  });

  const languages: Language[] = [
    { code: "ru", name: "Русский", flag: "/flags/ru.svg" },
    { code: "uz", name: "O'zbekcha", flag: "/flags/uz.svg" },
  ];

  return (
    <header>
      {/* Top white section */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            {/* Language selector */}
            <div className="relative">
              <div className="flex items-center gap-2 text-sm text-[#333333]">
                <Image
                  src={selectedLanguage.flag}
                  alt={selectedLanguage.name}
                  width={20}
                  height={15}
                  className="rounded"
                />
                <button
                  type="button"
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="flex items-center gap-2 font-semibold"
                >
                  {selectedLanguage.name}
                  <ChevronDown
                    className="w-4 h-4 text-[#2680EB] transition-transform duration-200"
                    style={{
                      transform: isLanguageOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                  />
                </button>
              </div>

              <div
                className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg py-1 w-40 z-50 transition-all duration-200 origin-top"
                style={{
                  opacity: isLanguageOpen ? 1 : 0,
                  transform: isLanguageOpen ? "scale(1)" : "scale(0.95)",
                  visibility: isLanguageOpen ? "visible" : "hidden",
                }}
              >
                {languages.map((language) => (
                  <button
                    key={language.code}
                    type="button"
                    onClick={() => {
                      setSelectedLanguage(language);
                      setIsLanguageOpen(false);
                    }}
                    className="flex items-center gap-2 w-full px-4 py-2 text-sm text-[#333333] hover:bg-gray-50 transition-colors duration-150"
                  >
                    <Image
                      src={language.flag}
                      alt={language.name}
                      width={20}
                      height={15}
                      className="rounded"
                    />
                    <span className="font-semibold">{language.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Phone number */}
            <a
              href="tel:+998712007007"
              className="text-sm text-[#333333] font-semibold hover:text-[#2680EB] transition-colors duration-200"
            >
              +998 71 200 70 07
            </a>
          </div>

          <div className="flex items-center space-x-6">
            {/* Favorites */}
            <Link
              href="/favorites"
              className="flex items-center gap-2 text-sm text-[#333333] font-semibold hover:text-[#2680EB] transition-colors duration-200"
            >
              <Heart className="w-5 h-5 text-[#2680EB]" />
              <span>Избранные</span>
            </Link>

            {/* Login */}
            <Link
              href="/login"
              className="flex items-center gap-2 text-sm text-[#333333] font-semibold bg-[#EEEEEE] px-4 py-1.5 rounded-md hover:bg-[#E5E5E5] transition-colors duration-200"
            >
              <span>Войти</span>
              <LogIn className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Grey section with logo */}
      <div className="bg-[#F7F8FA] border-b border-gray-200">
        <div className="container mx-auto px-4 h-20 flex items-center justify-center">
          <Link
            href="/"
            className="flex-shrink-0 absolute -top-4 left-1/2 -translate-x-1/2"
          >
            <Image
              src="/logo.svg"
              alt="77.uz"
              width={370}
              height={100}
              priority
              className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            />
          </Link>
        </div>
      </div>

      {/* Search section */}
      <div className="container mx-auto px-4 -mt-5 mb-8 relative z-10">
        <div className="max-w-2xl mx-auto">
          <Search />
        </div>
      </div>
    </header>
  );
}
