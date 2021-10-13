import Link from 'next/link';
import {Layout_Shop} from "../components/react-bootstrap/Layout";
import config from "@/config/index";

export default function custom404() {
const title = "404"
    return (
        <Layout_Shop 
            title={`${config.title} ${title}`}
        >
<div className="text-center">
        <h1>404</h1>
        <p>Esta pagina no existe. Por favor regresa a <Link href="/"><a>Home</a></Link></p>
        </div>
        </Layout_Shop>
        
    )
}