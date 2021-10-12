import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import {Grid} from "@/components/react-bootstrap/Grid";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import {useState} from "react";
import { useRouter } from 'next/router';
export function Carta__Product({ title, link, tumbnail, description }) {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const titleStyle = { overflow: "hidden",textOverflow: "ellipsis", whiteSpace: "nowrap" }
  const push = () => router.push(link)
  return (
    <>
    <a >
      <Card style={{cursor: "pointer"}}>
      <Card.Title style={titleStyle} onClick={push}>{title}</Card.Title >
        <Card.Body onClick={push}> 
          <Card.Img variant="top" src={tumbnail} />
        </Card.Body>
        <Button variant="primary" onClick={() => setShow(true)} >Description</Button>
      </Card>
    </a>
    <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        fullscreen={true}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >
{/*           //FIXME: 
          no logro que la descripcion se quiebre, y cree una nueva linrea. */}
          <pre>
            {description}
          </pre>
        </Modal.Body>
      </Modal>
    <style jsx>{`
        a {
          text-decoration: none;
        }
      `}</style>
    </>
  );
}
export function Carta__Categorie({ categories, products }) {
  return (
    //TODO: crear un mecanismo opcional, para filtrar los productos dependiendo del id de la categoria y subcategorie.
    <Card>
      {categories.map((Categories, i) => {
        const title = Categories.Title;
        const categoriesId = Categories.id;
        const link = "/categories/[id]";
        const query = categoriesId;
        return (
          <>
            <Carta__Categorie_Content
              title={title}
              link={link}
              products={products}
              query={query}
              key={i}
            />
          </>
        );
      })}
    </Card>
  );
}
function Carta__Categorie_Content({ title, products, link, query }) {
  return (
    <>
      <Link
        href={{
          pathname: link,
          query: { id: query },
        }}
      >
        <a>
          <Card.Title>{title}</Card.Title>
        </a>
      </Link>
      <Grid>
        {products.map((Products, i) => {
          const thumbnail = Products.thumbnail.name;
          const productCategorie = Products.categories.Title;
          const link = Products.Link;
          if (title == productCategorie) {
            return (
              <>
                <Col key={i}>
                  <a href={link}>
                    <Card.Img variant="top" src={thumbnail} />
                  </a>
                </Col>
              </>
            );
          } else return null;
        })}
      </Grid>
    </>
  );
}
export function Carta_Subcategorie({ subcategories, products }) {
  return (
    <>
      <Card>
        {subcategories.map((Subcategories, i) => {
          const title = Subcategories.Title;
          const link = "/subcategories/[id]";
          const query = Subcategories.id;
          return (
            <>
              <Carta__Subcategorie_Content
                title={title}
                link={link}
                products={products}
                query={query}
                key={i}
              />
            </>
          );
        })}
      </Card>
    </>
  );
}
function Carta__Subcategorie_Content({ title, products, link, query }) {
  return (
    <>
      <Link
        href={{
          pathname: link,
          query: { id: query },
        }}
      >
        <a>
          <Card.Title>{title}</Card.Title>
        </a>
      </Link>
      <Grid>
        {products.map((Products, i) => {
          const thumbnail = Products.thumbnail.name;
          const link = Products.Link;
          return Products.sub_categories.map((Subcat, i) => {
            const productSubcat = Subcat.Title;
            if (title == productSubcat) {
              return (
                <>
                  <Col key={i}>
                    <a href={link}>
                      <Card.Img variant="top" src={thumbnail} />
                    </a>
                  </Col>
                </>
              );
            } else return null;
          });
        })}
      </Grid>
    </>
  );
}
