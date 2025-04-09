"use client";

import { FormEvent, useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";
import Image from "next/image";

interface Category {
  id: string;
  title: string;
  count: number;
}

const categories: Category[] = [
  { id: "electronics", title: "Холодильники", count: 150 },
  { id: "tv", title: "Телевизоры", count: 200 },
  { id: "headphones", title: "Наушники и аксессуары", count: 300 },
  { id: "kitchen", title: "Кухонная мебель", count: 180 },
  { id: "phones", title: "Телефоны", count: 400 },
  { id: "appliances", title: "Бытовая техника", count: 250 },
  { id: "microwaves", title: "Микроволновки", count: 120 },
  { id: "batteries", title: "Аккумуляторы", count: 90 },
];

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
                <span className="text-sm">{category.title}</span>
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
