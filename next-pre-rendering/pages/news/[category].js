function ArticalListByCategory({articles,category}){debugger
    return(
        <>
        <h1>Showing news for category {category}</h1>
     
        {
            articles.map((article)=>{
                return(
                    <>
                    <div key={article.id}></div>
                    <h2>
                        {article.id} {article.title}
                    </h2>
                    <p>{article.description}</p>
                    <hr/>
                    </>
                )
            })
        }
         </>
    )
}

export default ArticalListByCategory

export async function getServerSideProps(context){debugger
    //Dynamic
    const {params}=context
    const {category}=params
    console.log("context",context)
    const response=await fetch(`http://localhost:4000/news?category=${category}`)
    const data=await response.json()
    return{
        props:{
            articles:data,
            category
        }
    }
}