import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import Dropdown from "react-bootstrap/Dropdown";
import {router} from "@/config/index";
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
export function NavBar_Main({ categories, subcategories }) {
  return (
    <Nav>
      <Nav.Item>
        <Link href={router._0}>
          <a className="nav-link active">Home</a>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link href={router._5}>
          <a className="nav-link">Products</a>
        </Link>
      </Nav.Item>
      <Categories categories={categories}  />
      <Subcategories subcategories={subcategories} className="bg-dark" />
      <Nav.Item>
        <Link href={router._6}>
          <a className="nav-link">About</a>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link href={router.other}>
          <a className="nav-link">Other Products</a>
        </Link>
      </Nav.Item>
    </Nav>
  );
}
function Categories({ categories }) {
  const linkCat = {
    pathname: router._3,
  };
  if (categories) {
    return (
      <Nav.Item >
        <Dropdown >
          <Dropdown.Toggle style={{backgroundColor: "black"}} id="dropdown-categories">
            Categories
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {categories.map((cat) => {
              const link = {
                pathname: router._4,
                query: { id: cat.id },
              };
              return (
                <>
                  <Link href={link} passHref>
                    <Dropdown.Item>{cat.Title}</Dropdown.Item>
                  </Link>
                </>
              );
            })}
            <Dropdown.Divider />
            <Link href={linkCat} passHref>
              <Dropdown.Item>Categories</Dropdown.Item>
            </Link>
          </Dropdown.Menu>
        </Dropdown>
      </Nav.Item>
    );
  } else {
    return (
      <>
        <Nav.Item>
          <Link href={linkCat}>
            <a className="nav-link">Categories</a>
          </Link>
        </Nav.Item>
      </>
    );
  }
}
function Subcategories({subcategories}) {
  const linkSubcat = {
    pathname: router._1,
  };
  if (subcategories) {
    return (
      <Nav.Item>
        <Dropdown>
          <Dropdown.Toggle style={{backgroundColor: "black"}} id="dropdown-subcategories">
            Subcategories
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {subcategories.map((subCat) => {
              const link = {
                pathname: router._2,
                query: { id: subCat.id },
              };
              return (
                <>
                  <Link href={link} passHref>
                    <Dropdown.Item>{subCat.Title}</Dropdown.Item>
                  </Link>
                </>
              );
            })}
            <Dropdown.Divider />
            <Link href={linkSubcat} passHref>
              <Dropdown.Item>Subcategories</Dropdown.Item>
            </Link>
          </Dropdown.Menu>
        </Dropdown>
      </Nav.Item>
    );
  } else {
    return (
      <>
        <Nav.Item>
          <Link href={linkSubcat}>
            <a className="nav-link">Subcategories</a>
          </Link>
        </Nav.Item>
      </>
    );
  }
}