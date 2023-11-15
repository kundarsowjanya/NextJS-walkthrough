import Footer from "@/components/Footer"
import Head from 'next/head'

function About(){
    return(
        <>
        <Head>
            <title>About Codevalution</title>
            <meta name="description" content="Free tutorials on web content"/>
        </Head>
        <h1 className="content">About</h1>
        </>
    )
}

export default About

About.getLayout=function PageLayout(page){
    return(
        <>
        {page}
        <Footer/>
        </>
    )
}