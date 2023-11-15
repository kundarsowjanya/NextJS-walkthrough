import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import "../styles/layout.css"
import Head from 'next/head'
export default function App({ Component, pageProps }) {

  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />)
  }
  return(
  <>
       <Head>
            <title> Codevalution</title>
            <meta name="description" content="Awsome Youtube channel"/>
        </Head>
   <Header/>
   <Component {...pageProps} />
   <Footer/>
   </>
  )
}
