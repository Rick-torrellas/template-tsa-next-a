import Layout from "./../../components/Layout";
import axios from "axios";
import { _Sample } from "./../../lib/icons/react-bootstrap";
import config from "./../../config";
import Grid from "./../../lib/Grid/Grid"
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Products({ res }) {
  return (
    <Layout title="" >
      <Content data-testid="content" res={res} />
    </Layout>
  );
}
function Content({ res }) {

  return (
    <>
    
      {res.map((Res, i) => {
        const title = Res.Title;
        const link = Res.Link;
        const thumbnail = Res.thumbnail.name;
        return (
          <Grid>
          <Carta 
    //FIXME: acortar el testo con css.
          title={title}
          link={link}
          tumbnail={thumbnail}
          />
         </Grid>
        )
      })}
     
    </>
  );
}

function Carta({title,link,tumbnail}) {
  return (
    <>
{/* //TODO: definir con jsx un estilo solo para este componente. quitarle a los a su estilo */}
    <a href={link}>
    <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{title}</Card.Title>
  <Card.Img variant="top" src={tumbnail} />
    <Button variant="primary">Description</Button>
  </Card.Body>
</Card>
    </a>
    </>
  )
}


export async function getServerSideProps() {
  const res = await axios.get(`${config.apiUrl}/products`);
  return {
    props: { res: res.data },
  };
}
