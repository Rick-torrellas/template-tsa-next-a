import Layout from "./../../components/Layout";
import axios from "axios";
import { _Sample } from "../../components/icons/react-bootstrap";
import config from "./../../config";
import Grid from "@/components/Grid";
import { Carta__Product } from "@/components/Carta";
export default function Products({ products }) {
  return (
    <Layout title="" >
      <Content data-testid="content" products={products} />
    </Layout>
  );
}
export function Content({ products }) {
  return (
    <>
    <Grid>
      {products.map((Products, i) => {
        const title = Products.Title;
        const link = Products.Link;
        const thumbnail = Products.thumbnail.name;
        return (
          <Carta__Product    
          title={title}
          link={link}
          tumbnail={thumbnail}
          key={i}
          />
        )
      })}
     </Grid>
    </>
  );
}
export async function getServerSideProps() {
  const Products = await axios.get(`${config.apiUrl}/products`);
  return {
    props: { products: Products.data },
  };
}
