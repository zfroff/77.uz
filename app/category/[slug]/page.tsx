"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Breadcrumb } from "@/components/breadcrumb";
import { CategoriesSection } from "@/components/categories-section";
import { SubcategoryList } from "@/components/subcategory-list";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

// This would normally come from an API or database
const categoryData: Record<
  string,
  { title: string; subcategories: string[] | null }
> = {
  smartphones: {
    title: "Смартфоны",
    subcategories: [
      "Аксессуары",
      "Мобильные телефоны",
      "Сим карты / тарифы / номера",
      "Смартфоны",
      "Прочие телефоны",
      "Стационарные телефоны",
      "Ретро телефоны",
      "Телефон лягушки",
    ],
  },
  pets: {
    title: "Товары для животных",
    subcategories: null,
  },
};

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categoryData[params.slug] || {
    title: "Категория не найдена",
    subcategories: null,
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Breadcrumb
        items={[
          { label: "Main", href: "/" },
          { label: "Catalog active", href: "#" },
        ]}
      />
      <div className="container mx-auto px-4 py-8">
        <SubcategoryList
          title={category.title}
          subcategories={category.subcategories}
        />
        <CategoriesSection />
      </div>
      <Footer />
    </main>
  );
}
