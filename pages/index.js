import Layout from "./../components/Layout";
import axios from "axios";
import config from "./../config";
import Grid from "@/components/Grid";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Home({ navSubCat, navCat }) {
  return (
    <Layout title="" >
      <Content data-testid="content" />
    </Layout>
  );
}
function Content() {

  return (
    <>
     
    </>
  );
}
export async function getServerSideProps() {
  const subcatUrl = `${config.apiUrl}/sub-categories`;
  const catUrl = `${config.apiUrl}/categories`;
  const _navSubCat = await axios.get(subcatUrl);
  const _navCat = await axios.get(catUrl);
  const navSubCat = _navSubCat.data;
  const navCat = _navCat.data;
  return {
    props: { navSubCat: navSubCat, navCat: navCat }
  };
}