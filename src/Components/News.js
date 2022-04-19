import NewsItem from "./NewsItem";
function News(props) {
    return ( <>
    <div className="container">
    <NewsItem hasMore={props.hasMore} pageSize={props.pageSize} pgsize={props.pgsize} article={props.article}  mode={props.mode}/>
    </div>
        </> 
    );
}

export default News;