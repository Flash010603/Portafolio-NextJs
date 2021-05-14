import { useRouter } from "next/router";
import { useEffect } from "react";

import NProgress from "nprogress";

import { Footer } from './Footer'
import { NavBar } from './NavBar'
import Head from "next/head";


export const Layout = ({ children }) => {

    const router = useRouter();

    useEffect(() => {
        const ChangeRoute = url => {
            NProgress.start();
        };

        router.events.on('routeChangeStart', ChangeRoute);
        router.events.on('routeChangeComplete', () => NProgress.done());

        return () => {
            router.events.off('routeChangeStart', ChangeRoute);
        }
    }, [])

    return (
        <>
            <Head>
                <title>Mi aplicacion con Next</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/nprogress@0.2.0/nprogress.css"></link>
            </Head>
            <NavBar />

            <main className="container my-4">
                {children}
            </main>

            <Footer />
        </>
    )
}
