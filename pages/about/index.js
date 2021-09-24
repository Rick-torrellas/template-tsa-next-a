import Layout from "./../../react-components/Layout/Layout";


export default function About({res}) {
  return (
    <Layout title="ola" childrenMargin="20%" >
<Content 
  res={res}
/>
    </Layout>
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