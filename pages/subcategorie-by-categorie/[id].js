import { useRouter } from "next/router";
import axios from "axios";
import config from "../../config";
import Layout from "../../components/Layout";
import {Grid} from "@/components/react-bootstrap/Grid";
import { Carta__Product } from "@/components/react-bootstrap/Carta";
import { NavBar__SubCategorie } from "../../components/react-bootstrap/NavBar";
var _ = require('lodash');
function Subcategorie({ categorie, products, subcategories }) {
  const router = useRouter();
  const { id,subid } = router.query;
  return (
    <>
      <Layout>
        <Content
          data-testid="content"
          id={id}
          subid={subid}
          categorie={categorie}
          products={products}
          subcategories={subcategories}
        />
      </Layout>
    </>
  );
}
export function Content({ categorie, products,subcategories, id,subid }) {
  const catTitle = categorie.Title;
  let subtitle;
  subcategories.forEach(SUB => {
    if (subid == SUB.id) {
      subtitle = SUB.Title;
    }
  });
  return (
    <>
      <h1>{catTitle}</h1>
      <h3>{subtitle}</h3>
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
         
         console.log(subtitle)
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
