import Layout from "./../components/Layout";
import axios from "axios";
import { _Sample } from "./../lib/icons/react-bootstrap";
import config from "./../config";
import Grid from "./../lib/Grid/Grid"
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Home({ res }) {
  return (
    <Layout title="" >
      <Content data-testid="content" res={res} />
    </Layout>
  );
}
function Content({ res }) {

  return (
    <>
     
    </>
  );
}
