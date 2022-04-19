import InfiniteScroll from 'react-infinite-scroll-component';
function NewsItem(props) {
    let fetchData=()=>{
        props.pgsize()
    }
    return (<>
        <div className="container">
        <InfiniteScroll
        dataLength={props.pageSize} //This is important field to render the next data
        next={fetchData}
        hasMore={props.pageSize<=props.hasMore}
        loader={<h4>Loading...</h4>}
        >
        <div className='container'>
            <div className="row justify-content-around">
                {props.article && props.article.map((element) => {
                    return (<div className="col-md-4 my-3"><div className="card" style={props.mode === "dark" ? { color: "black", width: "18rem", borderColor: "black", borderRadius: "10px" } : { color: "white", width: "18rem", borderColor: "black", borderRadius: "10px", backgroundColor: "#212529" }}>
                        <img src={element.urlToImage === null ? require("E:\\newsonly\\src\\NewsImage.png") : element.urlToImage} className="card-img-top" alt="..." />
                        {console.log(element.urlToImage)}
                        <div className="card-body">
                            <h5 className="card-title">{element.title}</h5>
                            <p className="card-text">{element.description}</p>
                            <a href={element.url} className={props.mode === "dark" ? "btn btn-dark" : "btn btn-light"}  >Read More</a>
                            <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
                                {element.source.name}
                                <span class="visually-hidden">unread messages</span>
                            </span>
                        </div>
                    </div></div>)
                })}
            </div>
            </div>
            </InfiniteScroll>
        </div>
    </>
    )
};

export default NewsItem;