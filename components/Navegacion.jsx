import Nav from "react-bootstrap/Nav";
import Link from 'next/link';

export default function Navegacion() {
    return (
        <Nav>
  <Nav.Item>
    <Link href="/"><a className="nav-link active">Home</a></Link>
  </Nav.Item>
  <Nav.Item>
    <Link href="/"><a className="nav-link">Link</a></Link>
  </Nav.Item>
  <Nav.Item>
    <Link href="/about" ><a className="nav-link">About</a></Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>
    )
}