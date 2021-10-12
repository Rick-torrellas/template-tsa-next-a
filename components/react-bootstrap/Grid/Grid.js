import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

export function Grid({ children, md=4 , xs=3 }) {
  // la idea es que este layout mande la informacion que neciba a los componentes jijos, para poder construir los componentes hijos
  return (
      <Container >
      <Row xs={xs} md={md} >
        {children}
      </Row>
    </Container>
  );
}
