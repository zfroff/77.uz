"use client";

import { FormEvent, useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import {
  Package,
  Building2,
  Truck,
  Laptop,
  Wrench as Services,
  ShoppingBag as Fashion,
  Dumbbell,
  Palmtree,
  Home as HomeIcon,
} from "lucide-react";

export interface Category {
  id: string;
  title: string;
  icon: any;
  count: number;
  subcategories: { name: string; href: string }[] | null;
}

const categories: Category[] = [
  {
    id: "pets",
    title: "Товары для животных",
    icon: Package,
    count: 12,
    subcategories: [
      { name: "Корма", href: "/category/pets/food" },
      { name: "Аксессуары", href: "/category/pets/accessories" },
      { name: "Игрушки", href: "/category/pets/toys" },
    ],
  },
  {
    id: "real-estate",
    title: "Недвижимость",
    icon: Building2,
    count: 4147,
    subcategories: null,
  },
  {
    id: "transport",
    title: "Транспорт",
    icon: Truck,
    count: 4147,
    subcategories: null,
  },
  {
    id: "electronics",
    title: "Электроника",
    icon: Laptop,
    count: 4147,
    subcategories: [
      { name: "Смартфоны", href: "/category/electronics/smartphones" },
      { name: "Аксессуары", href: "/category/electronics/accessories" },
      {
        name: "Мобильные телефоны",
        href: "/category/electronics/mobile-phones",
      },
      {
        name: "Сим карты / тарифы / номера",
        href: "/category/electronics/sim-cards",
      },
      { name: "Прочие телефоны", href: "/category/electronics/other-phones" },
      {
        name: "Стационарные телефоны",
        href: "/category/electronics/landline-phones",
      },
      { name: "Ретро телефоны", href: "/category/electronics/retro-phones" },
      { name: "Телефон лягушки", href: "/category/electronics/frog-phones" },
    ],
  },
  {
    id: "services",
    title: "Услуги",
    icon: Services,
    count: 4147,
    subcategories: null,
  },
  {
    id: "fashion",
    title: "Мода и стиль",
    icon: Fashion,
    count: 4147,
    subcategories: null,
  },
  {
    id: "sports",
    title: "Спорт",
    icon: Dumbbell,
    count: 4147,
    subcategories: null,
  },
  {
    id: "leisure",
    title: "Отдых",
    icon: Palmtree,
    count: 4147,
    subcategories: null,
  },
  {
    id: "home",
    title: "Дом и сад",
    icon: HomeIcon,
    count: 4147,
    subcategories: null,
  },
];

export const fetchCategoryBySlug = async (slug: string) => {
  // Replace this with your actual data fetching logic
  const category = categories.find((cat) => cat.id === slug); // Example logic
  return category || null; // Return null if not found
};

export function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filteredCategories, setFilteredCategories] = useState<Category[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = categories.filter((category) =>
        category.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCategories(filtered);
    } else {
      setFilteredCategories(categories);
    }
  }, [searchTerm]);

  const highlightMatch = (title: string, searchTerm: string) => {
    if (!searchTerm) return title;
    const regex = new RegExp(`(${searchTerm})`, "gi");
    const parts = title.split(regex);
    return parts.map((part, index) =>
      part.toLowerCase() === searchTerm.toLowerCase() ? (
        <span key={index} className="bg-yellow-200">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Add search logic here
  };

  const handleCategoryClick = (category: Category) => {
    setSearchTerm(category.title);
    setIsDropdownOpen(false);
  };

  const handleInputFocus = () => {
    setIsDropdownOpen(true);
    setFilteredCategories(categories);
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-200 z-40 ${
          isDropdownOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
      />
      <div className="w-full max-w-2xl relative">
        <form onSubmit={handleSubmit} className="w-full flex relative z-50">
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={handleInputFocus}
            placeholder="Что вы ищите?"
            className="w-full px-4 py-3 border border-[#E0E0E0] rounded-l-md focus:outline-none focus:border-[#000] text-sm"
            name="search"
            autoComplete="off"
          />
          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm("")}
              className="absolute right-20 top-1/2 transform -translate-x-10 -translate-y-1/2 text-gray-500 hover:text-black"
            >
              ×
            </button>
          )}
          <button
            type="submit"
            className="bg-[#1A1A1A] text-white px-8 py-3 rounded-r-md hover:bg-[#333333] transition-colors text-sm"
          >
            Поиск
          </button>
        </form>

        <div
          ref={dropdownRef}
          className={`absolute top-full left-0 right-0 mt-1 bg-white border border-[#E0E0E0] rounded-md shadow-lg z-50 max-h-[400px] overflow-y-auto transition-all duration-200 origin-top ${
            isDropdownOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <div className="p-2 border-b border-[#E0E0E0]">
            <p className="text-sm text-[#666666]">История поиска</p>
          </div>
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category)}
                className="w-full px-4 py-2 text-left hover:bg-[#F5F5F5] flex items-center gap-2"
              >
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">
                  {highlightMatch(category.title, searchTerm)}
                </span>
              </button>
            ))
          ) : (
            <div className="py-8 flex flex-col items-center justify-center">
              <div className="w-16 h-16 mb-4 relative">
                <Image
                  src="/not-found.svg"
                  alt="Not found"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-lg font-medium text-[#333333] mb-1">
                Ничего не найдено
              </p>
              <p className="text-sm text-[#666666]">
                Упс! Мы не смогли найти ни одного
                <br />
                подходящего результата по вашему запросу
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
