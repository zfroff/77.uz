"use client";

import { useState, ReactNode } from "react";
import {
  User,
  Package,
  Heart,
  Monitor,
  Home,
  ShoppingBag,
  Car,
  Briefcase,
  Shirt,
  Footprints,
  Baby,
  Wrench,
  Construction,
  Plane,
  Building2,
  Truck,
  Laptop,
  Wrench as Services,
  ShoppingBag as Fashion,
  Dumbbell,
  Palmtree,
  Home as HomeIcon,
} from "lucide-react";
import { CategoryCard } from "./category-card";
import { ExpandedCategory } from "./expanded-category";

interface Category {
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

export function CategoriesSection() {
  const [expandedCategory, setExpandedCategory] = useState<Category | null>(
    null
  );
  const [usedInRowCompletion, setUsedInRowCompletion] = useState<Set<string>>(
    new Set()
  );

  const handleCategoryClick = (category: Category) => {
    if (expandedCategory?.id === category.id) {
      setExpandedCategory(null);
      setUsedInRowCompletion(new Set());
    } else {
      setExpandedCategory(category);
      // Calculate which categories will be used for row completion
      const categoryIndex = categories.findIndex((c) => c.id === category.id);
      if (!((categoryIndex + 1) % 3 === 0)) {
        const slotsUntilRowEnd = 3 - ((categoryIndex + 1) % 3);
        const nextCategories = categories.slice(
          categoryIndex + 1,
          categoryIndex + 1 + slotsUntilRowEnd
        );
        setUsedInRowCompletion(new Set(nextCategories.map((c) => c.id)));
      } else {
        setUsedInRowCompletion(new Set());
      }
    }
  };

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-2 text-[#333333]">
          Категории
        </h2>
        <p className="text-center text-[#999999] text-sm mb-8">
          Вы можете найти все категории, которые вам нужны от покупателя
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.reduce((acc: ReactNode[], category, index) => {
            const isExpanded = expandedCategory?.id === category.id;
            const isLastInRow = (index + 1) % 3 === 0;

            // Skip if this category was used to complete a previous row
            if (!usedInRowCompletion.has(category.id)) {
              acc.push(
                <CategoryCard
                  key={`main-${category.id}`}
                  title={category.title}
                  count={category.count}
                  icon={category.icon}
                  href={`/category/${category.id}`}
                  onClick={() => handleCategoryClick(category)}
                  isExpanded={isExpanded}
                />
              );
            }

            if (isExpanded) {
              // Complete the current row with remaining categories
              if (!isLastInRow) {
                const slotsUntilRowEnd = 3 - ((index + 1) % 3);
                const nextCategories = categories.slice(
                  index + 1,
                  index + 1 + slotsUntilRowEnd
                );
                nextCategories.forEach((nextCategory, rowIndex) => {
                  acc.push(
                    <CategoryCard
                      key={`row-completion-${nextCategory.id}-${rowIndex}`}
                      title={nextCategory.title}
                      count={nextCategory.count}
                      icon={nextCategory.icon}
                      href={`/category/${nextCategory.id}`}
                      onClick={() => handleCategoryClick(nextCategory)}
                      isExpanded={false}
                    />
                  );
                });
              }

              // Add expanded view after completing the row
              acc.push(
                <div
                  key={`expanded-${category.id}`}
                  className="col-span-full mt-8 relative transition-all duration-300 ease-out"
                  style={{
                    animation: isExpanded
                      ? "expandView 0.3s ease-out forwards"
                      : "none",
                  }}
                >
                  <style jsx>{`
                    @keyframes expandView {
                      from {
                        opacity: 0;
                        transform: translateY(-8px);
                      }
                      to {
                        opacity: 1;
                        transform: translateY(0);
                      }
                    }
                  `}</style>
                  <div
                    className="absolute -top-10 left-0 z-10"
                    style={{
                      left: `${(index % 3) * 33.33 + 16.665}%`,
                    }}
                  >
                    <div
                      className="w-10 h-10 bg-white rotate-45 border-t border-l border-gray-200 -translate-x-1/2 rounded-tl-md"
                      style={{
                        boxShadow: "-1px -1px 0 0 rgba(0,0,0,0.05)",
                      }}
                    />
                  </div>
                  {category.subcategories ? (
                    <div className="bg-white rounded-lg border border-gray-200 p-6 relative -mt-5 pt-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {category.subcategories.map((subcategory) => (
                          <a
                            key={subcategory.href}
                            href={subcategory.href}
                            className="block p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors"
                          >
                            <span className="text-gray-900">
                              {subcategory.name}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="bg-white rounded-lg border border-gray-200 p-6 relative -mt-5 pt-8">
                      <p className="text-gray-500 text-center">
                        В этой категории нет подкатегорий
                      </p>
                    </div>
                  )}
                </div>
              );
            }

            return acc;
          }, [])}
        </div>
      </div>
    </section>
  );
}
