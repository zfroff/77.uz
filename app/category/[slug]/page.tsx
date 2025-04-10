import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Breadcrumb } from "@/components/breadcrumb";
import { CategoriesSection } from "@/components/categories-section";
import { SubcategoryList } from "@/components/subcategory-list";
import CategoryClient from "@/components/CategoryClient";

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

export const metadata = ({ params }: { params: { slug: string } }) => {
  const category = categoryData[params.slug];
  return {
    title: category
      ? `${category.title} - 77.uz`
      : "Category Not Found - 77.uz",
    description: category
      ? `Explore ${category.title} and its subcategories on 77.uz.`
      : "The category you are looking for does not exist.",
  };
};

export function generateStaticParams() {
  return Object.keys(categoryData).map((slug) => ({ slug }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categoryData[params.slug];

  if (!category) {
    return (
      <div>
        <Header />
        <div className="container">
          <h1>Category Not Found</h1>
          <p>The category you are looking for does not exist.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: category.title, href: `/category/${params.slug}` },
        ]}
      />
      <h1>{category.title}</h1>
      {category.subcategories ? (
        <SubcategoryList
          title={category.title}
          subcategories={category.subcategories}
        />
      ) : (
        <p>No subcategories available.</p>
      )}
      <CategoriesSection />
      <Footer />
    </div>
  );
}
