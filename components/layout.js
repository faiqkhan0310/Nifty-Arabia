import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./Footer";

export function Layout ({children}) {

    return(
        <>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Nifty-Arabia</title>
            <link rel="icon" href="/favicon.ico" />

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

          </Head>

<Navbar/>
<div className="main-rapper-col">
{children}
</div>
<Footer/>

        </>
        
    )
}