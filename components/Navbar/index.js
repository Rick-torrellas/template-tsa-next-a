import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import Grid from "../../lib/Grid/Grid";
import config from "../../config";
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
                return <Nav.Link>{title}</Nav.Link>;
              })}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export function NavBar__SubCategorie({ subcategories, id , url }) {
  return (
    <>
      <Nav>
        <Grid>
          {/* //TODO: DOING
           */}
          {subcategories.map((subCat, i) => {
            const subid = subCat.id;
            const link = {
              pathname: url,
              query: { id: id, subid: subid },
            };

            return (
              <>
                <Nav.Item key={i}>
                  <Link href={link}>
                    <a style={{ color: "white" }}>{subCat.Title}</a>
                  </Link>
                </Nav.Item>
              </>
            );
          })}
        </Grid>
      </Nav>
    </>
  );
}
