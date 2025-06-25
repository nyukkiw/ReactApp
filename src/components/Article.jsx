function Article (){
    const name = "Valentino";
    const titles = ["Tutorial with react js", "Tutorial with next js", "Tutorial with node Js"]
    
    return (
    <>
    <div>{name}</div>   


    <div>{titles.map((title)=>{
        return (
            <>
                <div>{title}</div>
                 <div>{title}</div>
            </>
        )
    })}</div>    
    </>

)
    
} 

export default Article;