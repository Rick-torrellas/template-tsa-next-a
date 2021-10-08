import { useRouter } from "next/router";
import axios from "axios";
import config from "./../../config";
import Layout from "./../../components/Layout";
import Grid from "./../../lib/Grid/Grid";
import { Carta__Product } from "@/components/Carta";
import { NavBar__SubCategorie } from "../../components/Navbar";
var _ = require('lodash');
function Subcategorie({ categorie, products, subcategories }) {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Layout>
        <Content
          data-testid="content"
          id={id}
          categorie={categorie}
          products={products}
          subcategories={subcategories}
        />
      </Layout>
    </>
  );
}
export function Content({ categorie, products,subcategories, id }) {
  const catTitle = categorie.Title;
  return (
    <>
      <h1>{catTitle}</h1>
      <NavBar__SubCategorie 
      id={id}
      subcategories={subcategories}
      />
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
/* //TODO: TODO
Los productos que le vamos a mandar a la plantilla, seran los que tenga el id de la categoria seleccionada.  */
const _subcategories = [];
const products = [];
  const { id,subid } = context.query;
  const categorie = await axios.get(`${config.apiUrl}/categories/${id}`);
  const _products = await axios.get(`${config.apiUrl}/products`);
  _products.data.forEach(element => {
    if (element.categories.id == id) {
        element.sub_categories.forEach(sub => {
       if (sub.id == subid) {
           products.push(element);
       }     
        _subcategories.push(sub);
      });
    }
  });
  const subcategories = _.uniqWith(_subcategories, _.isEqual);
  return {
    props: { categorie: categorie.data, products: products, subcategories: subcategories },
  };
}
export default Subcategorie;
