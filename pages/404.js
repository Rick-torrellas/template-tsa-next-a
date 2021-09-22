import Link from 'next/link';
import Layout from './../components/Layout';

export default function custom404() {
    return (
        <Layout 
            title="404"
        >
<div className="text-center">
        <h1>404</h1>
        <p>Esta pagina no existe. Por favor regresa a <Link href="/"><a>Home</a></Link></p>
        </div>
        </Layout>
        
    )
}