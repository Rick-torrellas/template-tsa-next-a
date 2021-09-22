import Layout from "./../components/Layout";
import axios from "axios";
import { _Sample } from "./../lib/icons/react-bootstrap";
import config from "./../config";

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
      <_Sample width="5%" />
      {res.map((Res, i) => {
        return <p key={i} >{Res.name}</p>
      })}
    </>
  );
}

export async function getServerSideProps() {
  const res = await axios.get(`${config.host}/api/data/home`);
  return {
    props: { res: res.data },
  };
}
