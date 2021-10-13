import {Layout_Shop} from "../components/react-bootstrap/Layout";
import config from "@/config/index";

export default function About() {
  const title = "About"
  return (
    <Layout_Shop title={`${config.title} ${title}`} childrenMargin="20%" >
<Content />
    </Layout_Shop>
  )
}
function Content() {
  return (
    <div>
        <h1>About</h1>
        <p>Text related to your application</p>
    </div>
  )
}