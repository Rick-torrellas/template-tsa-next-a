import { useRouter } from "next/router";
import axios from "axios";
import config from "@/config/index";
import {Layout_Shop} from "../../components/react-bootstrap/Layout";
import {Grid} from "@/components/react-bootstrap/Grid";
import { Carta__Product } from "@/components/react-bootstrap/Carta";
import { NavBar__SubCat } from "../../components/react-bootstrap/NavBar";
var _ = require("lodash");
function Subcategorie({ products, subcategories }) {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return (
    <>
      <Layout_Shop>
        <Content
          data-testid="content"
          id={id}
          products={products}
          subcategories={subcategories}
        />
      </Layout_Shop>
    </>
  );
}
export function Content({ products, subcategories, id }) {
  let title;
  config.debug && console.log(subcategories);
  subcategories.forEach((element) => {
    config.debug && console.log(element);
    if (element.id == id) {
      title = element.Title;
    }
  });
  return (
    <>
      <h1>{title}</h1>
      <NavBar__SubCat subcategories={subcategories} />
      <Grid>
        {products.map((Products, i) => {
          const title = Products.Title;
          const link = Products.Link;
          const thumbnail = Products.thumbnail.name;
          const productId = Products.categories.id;
          return (
            <>
              <Carta__Product
                /* //FIXME: 
                  acortar el testo con css. */
                key={i}
                title={title}
                link={link}
                tumbnail={thumbnail}
              />
            </>
          );
        })}
      </Grid>
    </>
  );
}
export async function getServerSideProps(context) {
  const products = [];
  const { id } = context.query;
  const _subcategories = await axios.get(`${config.apiUrl}/sub-categories`);
  const _products = await axios.get(`${config.apiUrl}/products`);
  const subcategories = _subcategories.data;
  _products.data.forEach((element) => {
      element.sub_categories.forEach((sub) => {
        if (sub.id == id) {
          products.push(element);
        }
      });
  });
  return {
    props: {
      products: products,
      subcategories: subcategories
    },
  };
}
export default Subcategorie;
