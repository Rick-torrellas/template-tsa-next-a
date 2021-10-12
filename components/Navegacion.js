import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import Dropdown from "react-bootstrap/Dropdown";
export default function Navegacion({ navCat, navSubCat }) {
  return (
    <Nav>
      <Nav.Item>
        <Link href="/">
          <a className="nav-link active">Home</a>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link href="/products">
          <a className="nav-link">Products</a>
        </Link>
      </Nav.Item>
      <Categories navCat={navCat}  />
      <Subcategories navSubCat={navSubCat} className="bg-dark" />

      <Nav.Item>
        <Link href="/about">
          <a className="nav-link">About</a>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link href="/">
          <a className="nav-link">Other Products</a>
        </Link>
      </Nav.Item>
    </Nav>
  );
}
export function Categories({ navCat }) {
  const linkCat = {
    pathname: "/categories",
  };
  if (navCat) {
    return (
      <Nav.Item >
        <Dropdown >
          <Dropdown.Toggle style={{backgroundColor: "black"}} id="dropdown-categories">
            Categories
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {navCat.map((cat) => {
              const link = {
                pathname: "/categories/[id]",
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
          <Link href="/categories">
            <a className="nav-link">Categories</a>
          </Link>
        </Nav.Item>
      </>
    );
  }
}
export function Subcategories({navSubCat}) {
  const linkSubcat = {
    pathname: "/subcategories",
  };
  if (navSubCat) {
    return (
      <Nav.Item>
        <Dropdown>
          <Dropdown.Toggle style={{backgroundColor: "black"}} id="dropdown-subcategories">
            Subcategories
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {navSubCat.map((subCat) => {
              const link = {
                pathname: "/subcategories/[id]",
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