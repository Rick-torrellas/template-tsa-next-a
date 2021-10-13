import { useRouter } from "next/router";
import axios from "axios";
import config from "@/config/index";
import {Layout_Shop} from "../../components/react-bootstrap/Layout";
import {Grid} from "@/components/react-bootstrap/Grid";
import { Carta__Product } from "@/components/react-bootstrap/Carta";
import { NavBar__SubCategorie } from "../../components/react-bootstrap/NavBar";
var _ = require('lodash');
function Categorie({ categorie, products, subcategories }) {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Layout_Shop>
        <Content
          data-testid="content"
          id={id}
          categorie={categorie}
          products={products}
          subcategories={subcategories}
        />
      </Layout_Shop>
    </>
  );
}
export function Content({ categorie, products,subcategories, id }) {
  const catTitle = categorie.Title;
  const caTDesc = categorie.Description;
  const url = "/subcategorie-by-categorie/[id]";
  return (
    <>
      <h1>{catTitle}</h1>
      <p>{caTDesc}</p>
      <NavBar__SubCategorie 
      id={id}
      subcategories={subcategories}
      url={url}
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
  const { id } = context.query;
  const categorie = await axios.get(`${config.apiUrl}/categories/${id}`);
  const _products = await axios.get(`${config.apiUrl}/products`);
  _products.data.forEach(element => {
    if (element.categories.id == id) {
products.push(element);
      element.sub_categories.forEach(element => {
        _subcategories.push(element);
      });
    }
  });
  const subcategories = _.uniqWith(_subcategories, _.isEqual);
  return {
    props: { categorie: categorie.data, products: products, subcategories: subcategories },
  };
}
export default Categorie;
