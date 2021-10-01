
import { useRouter } from "next/router";
import axios from "axios";
import config from "./../../config";
import Layout from "./../../components/Layout";
import Grid from "./../../lib/Grid/Grid";
import { Carta } from "./../products";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import { ModalTitle } from "react-bootstrap";
var _ = require('lodash');
function Categorie({ categorie, products, subcategories }) {
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
      <SubCategorieBar 
      id={id}
      subcategories={subcategories}
      />
      <Grid>
        {products.map((Products, i) => {
          const title = Products.Title;
          const link = Products.Link;
          const thumbnail = Products.thumbnail.name;
          const productId = Products.categories.id;
          if (productId == id) {
            return (
              <>
                <Carta
                  /* //FIXME: 
                  acortar el testo con css. */
                  key={i}
                  title={title}
                  link={link}
                  tumbnail={thumbnail}
                />
              </>
            );
          } else return null;
        })}
      </Grid>
    </>
  );
}
export function SubCategorieBar({subcategories, id }) {
  return (
    <>
      <Grid>
      <Nav>
{/* //TODO: DOING */}
        {subcategories.map((subCat,i) => {
const url = `${config.host}/categories/${id}/${subCat.id}`;
console.log(url)
          return (
            <>
          <Nav.Item key={i}>
  <Link href={url}>
  <a style={{color: "white"}} >{subCat.Title}</a>
  </Link>
</Nav.Item>
            </>
          )
        })}
        </Nav>
      </Grid>
    </>
  );
}
export async function getServerSideProps(context) {
const _subcategories = [];
  const { id } = context.query;
  const categorie = await axios.get(`${config.apiUrl}/categories/${id}`);
  const products = await axios.get(`${config.apiUrl}/products`);
  products.data.forEach(element => {
    if (element.categories.id == id) {
      element.sub_categories.forEach(element => {
        _subcategories.push(element);
      });
    }
  });
  const subcategories = _.uniqWith(_subcategories, _.isEqual);
  console.log(subcategories);
  return {
    props: { categorie: categorie.data, products: products.data, subcategories: subcategories },
  };
}
export default Categorie;
