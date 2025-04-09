"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CategoriesSection } from "@/components/categories-section";
import { ListingsSection } from "@/components/listings-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <CategoriesSection />
      <ListingsSection />
      <Footer />
    </main>
  );
}
