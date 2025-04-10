import { fetchCategoryBySlug } from "../../components/search";
import { fetchCategories } from "../../lib/api";

const fetchCategories = async () => {
  // For now, just return the categories array from components/search
  return categories;
};

export const generateStaticParams = async () => {
  // Fetch your categories or slugs from your data source
  const categories = await fetchCategories(); // Replace with your data fetching logic

  return categories.map((category) => ({
    slug: category.id, // Ensure this matches your dynamic route parameter
  }));
};

const CategoryPage = ({ category }) => {
  if (!category) {
    return <div>Category not found</div>; // Handle case where category is not found
  }

  return (
    <div>
      <h1>{category.title}</h1>
      {/* Render other category details here */}
    </div>
  );
};

export default CategoryPage;

export const getStaticProps = async ({ params }) => {
  if (!params || !params.slug) {
    return {
      notFound: true, // Return a 404 page if slug is not provided
    };
  }

  // Ensure params.slug is a string
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  const category = await fetchCategoryBySlug(slug); // Fetch category data based on slug
  return {
    props: {
      category,
    },
  };
};
