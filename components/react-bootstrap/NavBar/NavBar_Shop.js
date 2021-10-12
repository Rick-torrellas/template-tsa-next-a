import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import Container from "react-bootstrap/Container";
export function NavBar__Categorie({ categories }) {
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
                const query = Categories.id;
                const href = {
                  pathname: "/categories/[id]",
                  query: { id: query },
                };
                return (
                  <>
                    <Link href={href} passHref >
                      <Nav.Link key={i}>{title}</Nav.Link>
                    </Link>
                  </>
                );
              })}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export function NavBar__SubCategorie({ subcategories, id, url }) {
  return (
    <>
      {/* //FIXME: el diseno no me gusta, quiero uno mas precido a NavBar__Categorie */}
      <Navbar bg="dark" variant="dark">
      <Container>
      <Nav className="me-auto">
          {subcategories.map((subCat, i) => {
            const subid = subCat.id;
            const link = {
              pathname: url,
              query: { id: id, subid: subid },
            };
            return (
              <>
                  <Link href={link} passHref>
                    <Nav.Link >{subCat.Title}</Nav.Link>
                  </Link>
              </>
            );
          })}
        </Nav>
      </Container>
      </Navbar>
    </>
  );
}
export function NavBar__SubCat({ subcategories }) {
  return (
    <>
      {/* //FIXME: 
        volverlo sticki */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            {subcategories &&
              subcategories.map((Subcat, i) => {
                const title = Subcat.Title;
                const query = Subcat.id;
                const href = {
                  pathname: "/subcategories/[id]",
                  query: { id: query }
                };
                return (
                  <Link href={href} passHref>
                      <Nav.Link>{title}</Nav.Link>
                    </Link>
                )
              })}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}