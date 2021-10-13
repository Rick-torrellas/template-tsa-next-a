import {Layout_Shop} from "../../components/react-bootstrap/Layout";
import axios from "axios";
import config from "@/config/index";
import { Carta__Categorie } from "@/components/react-bootstrap/Carta";
import { NavBar__Categorie } from "@/components/react-bootstrap/NavBar";
export default function Categories({ categories, products, subcategories }) {
  const title = "Categories"
  return (
    <Layout_Shop title={`${config.title} ${title}`} categories={categories} subcategories={subcategories}>
      <Content
        data-testid="content"
        categories={categories}
        products={products}
      />
    </Layout_Shop>
  );
}
export function Content({ categories, products }) {
  const link = "/categories/[id]";
  return (
    <>
      <h1>Categories</h1>
{/* // Descripcion */}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi alias, odit delectus omnis repellat ratione ipsam officia mollitia amet sed quod cumque, quas eligendi, rem nihil ullam voluptatibus similique voluptatem!</p>
     <NavBar__Categorie categories={categories}/>
     <Carta__Categorie
      categories={categories} 
      products={products}
      link={link} />
    </>
  );
}
export async function getServerSideProps() {
  const catUrl = `${config.apiUrl}/categories`;
  const proUrl = `${config.apiUrl}/products`;
  const subUrl = `${config.apiUrl}/sub-categories`;
  const _categories = await axios.get(catUrl);
  const _products = await axios.get(proUrl);
  const _subcategories = await axios.get(subUrl);
  const subcategories = _subcategories.data;
  const categories = _categories.data;
  const products = _products.data;
  return {
    props: { categories: categories, products: products, subcategories: subcategories }
  };
}
