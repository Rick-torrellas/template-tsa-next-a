import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import config from "config";
import Link from "next/link";
import Grid from "@/components/Grid";
import Col from "react-bootstrap/Col";

export function Carta({ children, title }) {
  return (
    <>
      <Card>
        {title && <Card.Title>{title}</Card.Title>}
        {children}
      </Card>
    </>
  );
}
export function Carta__Product({ title, link, tumbnail, description }) {
  return (
    <a href={link}>
      <Carta title={title}>
        {/* //TODO: TODO
  definir con jsx un estilo solo para este componente. quitarle a los a su estilo das */}
        <Card.Body>
          {/*   //FIXME: 
  acortar el testo con css. */}
          <Card.Img variant="top" src={tumbnail} />
          <Button variant="primary">Description</Button>
        </Card.Body>
      </Carta>
    </a>
  );
}
export function Carta__Categorie({ categories, products }) {
  return (
    //TODO: crear un mecanismo opcional, para filtrar los productos dependiendo del id de la categoria y subcategorie.
    <Carta>
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
            />
          </>
        );
      })}
    </Carta>
  );
}
export function Carta__Categorie_Content({ title, products, link, query }) {
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
                <Col>
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
      <Carta>
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
              />
            </>
          );
        })}
      </Carta>
    </>
  );
}
export function Carta__Subcategorie_Content({ title, products, link, query }) {
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
                  <Col>
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
