import Nav from "react-bootstrap/Nav";
import Link from 'next/link';

export default function Navegacion() {
    return (
        <Nav>
  <Nav.Item>
    <Link href="/"><a className="nav-link active">Home</a></Link>
  </Nav.Item>
  <Nav.Item>
    <Link href="/categories"><a className="nav-link">Categories</a></Link>
  </Nav.Item>
  <Nav.Item>
    <Link href="/subcategories"><a className="nav-link">Subcategories</a></Link>
  </Nav.Item>
  <Nav.Item>
  <Link href="/products"><a className="nav-link">Products</a></Link>
  </Nav.Item>
  <Nav.Item>
    <Link href="/about" ><a className="nav-link">About</a></Link>
  </Nav.Item>
  <Nav.Item>
    <Link href="/"><a className="nav-link">Other Products</a></Link>
  </Nav.Item>
</Nav>
    )
}