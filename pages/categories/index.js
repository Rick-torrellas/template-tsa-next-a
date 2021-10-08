import Layout from "./../../components/Layout";
import axios from "axios";
import config from "./../../config";
import { Carta__Categorie } from "@/components/Carta";
import { NavBar__Categorie } from "@/components/Navbar";
export default function Categories({ categories, products }) {
  return (
    <Layout title="">
      <Content
        data-testid="content"
        categories={categories}
        products={products}
      />
    </Layout>
  );
}
export function Content({ categories, products }) {
  return (
    <>
      <h1>Categories</h1>
     <NavBar__Categorie categories={categories}/>
     <Carta__Categorie
      categories={categories} 
      products={products} />
    </>
  );
}
export async function getServerSideProps() {
  const categories = await axios.get(`${config.apiUrl}/categories`);
  const products = await axios.get(`${config.apiUrl}/products`);
  return {
    props: { categories: categories.data, products: products.data },
  };
}
