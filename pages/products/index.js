import {Layout_Shop} from "../../components/react-bootstrap/Layout";
import axios from "axios";
import { _Sample } from "../../components/react-bootstrap/icons/react-bootstrap";
import config from "@/config/index";
import {Grid} from "@/components/react-bootstrap/Grid";
import { Carta__Product } from "@/components/react-bootstrap/Carta";
export default function Products({ products }) {
  return (
    <Layout_Shop title="" >
      <Content data-testid="content" products={products} />
    </Layout_Shop>
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
        const description = Products.description;
        return (
          <Carta__Product    
          title={title}
          link={link}
          tumbnail={thumbnail}
          key={i}
          description={description}
          />
        )
      })}
     </Grid>
    </>
  );
}
export async function getServerSideProps() {
  const _Products = await axios.get(`${config.apiUrl}/products`);
  const Products = _Products.data;
  return {
    props: { products: Products },
  };
}
