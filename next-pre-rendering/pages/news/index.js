function NewsArticleList({articles}){debugger
    return(
    <>
    <h1>List Of News Articles</h1>
    {
        articles.map((article)=>{
            return(
            <div key={article.id}>
              <h2>
                  {article.id} {article.title} | {article.category}
              </h2>
            </div>
            )

        })
    }
    </>
    )
}

export default NewsArticleList

export async function getServerSideProps(){
    const response= await fetch("http://localhost:4000/news")
    const data=await response.json()
    console.log(data)
    return{
        props:{
            articles:data
        }
    }
}