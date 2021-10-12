import Layout from "./../../components/Layout";
import axios from "axios";
import config from "./../../config";
import { Carta_Subcategorie } from "@/components/Carta";
import { NavBar__SubCat } from "@/components/Navbar";
export default function Categories({ subcategories, products }) {
  return (
    <Layout title="Subcategories">
      <Content
        data-testid="content"
        subcategories={subcategories}
        products={products}
      />
    </Layout>
  );
}
export function Content({ subcategories, products }) {
  return (
    <>
      <h1>Subcategories</h1>
     <NavBar__SubCat subcategories={subcategories}/>
     <Carta_Subcategorie
      subcategories={subcategories} 
      products={products} />
    </>
  );
}
export async function getServerSideProps() {
  const subcatUrl = `${config.apiUrl}/sub-categories`;
  const productsUrl = `${config.apiUrl}/products`;
  const _subcategories = await axios.get(subcatUrl);
  const _products = await axios.get(productsUrl);
  const subcategories = _subcategories.data;
  const products = _products.data;
  return {
    props: { subcategories: subcategories, products: products },
  };
}
