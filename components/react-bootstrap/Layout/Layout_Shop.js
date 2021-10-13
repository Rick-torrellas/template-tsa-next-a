import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import NProgress from "nprogress";
import nProgress from "nprogress";
import {Footer_Shop} from "@/components/react-bootstrap/Footer";
import { NavBar_Main } from "@/components/react-bootstrap/NavBar";
export function Layout_Shop({ children, title , nav = true , footer = true ,childrenMargin, categories, subcategories}) {
  const router = useRouter();
  useEffect(() => {
    // barra de carga, cuando se renderiza la pagina
    const handleRouteChange = (url) => {
      console.log(url);
      NProgress.start();
    };
    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", () => NProgress.done());
    router.events.on("routeChangeError", () => nProgress.done());
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  });
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {nav && <NavBar_Main categories={categories} subcategories={subcategories} />}
      <main style={{margin: childrenMargin}}>{children}</main>
      {footer && <Footer_Shop />}
    </>
  );
};