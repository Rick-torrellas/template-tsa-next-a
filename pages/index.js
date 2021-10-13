import {Layout_Shop} from "../components/react-bootstrap/Layout";
import axios from "axios";
import config from "@/config/index";

export default function Home({ navSubCat, navCat }) {
  const title = "Home"
  return (
    <Layout_Shop 
    title={`${config.title} ${title}`} 
    navCat={navCat} 
    navSubCat={navSubCat}>
      <Content data-testid="content" />
    </Layout_Shop>
  );
}
function Content() {
  return <></>;
}
export async function getServerSideProps() {
  const subcatUrl = `${config.apiUrl}/sub-categories`;
  const catUrl = `${config.apiUrl}/categories`;
  const _navSubCat = await axios.get(subcatUrl);
  const _navCat = await axios.get(catUrl);
  const navSubCat = _navSubCat.data;
  const navCat = _navCat.data;
  return {
    props: { navSubCat: navSubCat, navCat: navCat },
  };
}
