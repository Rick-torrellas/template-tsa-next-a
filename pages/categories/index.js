import Layout from "./../../components/Layout";
import axios from "axios";
import { _Sample } from "./../../lib/icons/react-bootstrap";
import config from "./../../config";
import Grid from "./../../lib/Grid/Grid";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import Link from "next/link"
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import ReactPaginate from 'react-paginate';

export default function Categories({ categories, products }) {
  return (
    <Layout title="">
      <Content
        data-testid="content"
        categories={categories}
        products={products}
      />
    </Layout>
  );
}
export function Content({ categories, products }) {
  return (
    <>
      <h1>Categories</h1>
     <NavBar categories={categories}/>
     <Carta categories={categories} products={products} />
    </>
  );
}
export function Carta({categories,products}) {
    return (
        <>
         {categories.map((Categories, i) => {
        const title = Categories.Title;
        const categoriesId = Categories.id;
        const categoriesById = config.host+'/categories/'+categoriesId
        return (
            <>
          <Card style={{ width: "18rem" }}>
<Link href={categoriesById}><a><Card.Title>{title}</Card.Title></a></Link>    
<Grid >
              {products.map((Products, i) => {
                const thumbnail = Products.thumbnail.name;
                const productCategorie = Products.categories.Title;
                const link = Products.Link;
                if (title == productCategorie) {
                  return (
                      <>
                      <Col>
<a href={link}><Card.Img variant="top" src={thumbnail} /></a>
                   </Col>
                   </>
                  );
                }
              })}
</Grid>
          </Card>
          </>
        );
      })}
        </>
    )
}
export function NavBar({categories}) {
    return (
        <>
          {/* //FIXME: 
          volverlo sticki */}
         <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            {categories &&
              categories.map((Categories, i) => {
                const title = Categories.Title;
                return (
                    <Nav.Link>{title}</Nav.Link>
                );
              })}
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}

export async function getServerSideProps() {
  const categories = await axios.get(`${config.apiUrl}/categories`);
  const products = await axios.get(`${config.apiUrl}/products`);
  return {
    props: { categories: categories.data, products: products.data },
  };
}
