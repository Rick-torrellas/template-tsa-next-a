import Layout from "./../../components/Layout";
import axios from "axios";
import { _Sample } from "./../../lib/icons/react-bootstrap";
import config from "./../../config";
import Grid from "./../../lib/Grid/Grid"
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

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
          <Carta    
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

export function Carta({title,link,tumbnail}) {
  return (
    <>
{/* //TODO: TODO
definir con jsx un estilo solo para este componente. quitarle a los a su estilo das */}
    <a href={link}>
    <Card >
  <Card.Body>
{/*   //FIXME: 
acortar el testo con css. */}
    <Card.Title>{title}</Card.Title>
  <Card.Img variant="top" src={tumbnail} />
    <Button variant="primary">Description</Button>
  </Card.Body>
</Card>
    </a>
    </>
  )
}


export async function getServerSideProps() {
  const Products = await axios.get(`${config.apiUrl}/products`);
  return {
    props: { products: Products.data },
  };
}
