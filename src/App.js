import { useState } from 'react';
import LoadingBar from 'react-top-loading-bar'
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home';

function App() {
  const [progress, setProgress] = useState(0)
  let [mode, setMode] = useState("light");
  let [article, setArticle] = useState(null);
  let [pageSize,setPageSize]=useState(6);
  let [page,setPage]=useState(1);
  let [totalResult,setTotalResult]=useState(0);
  let [category,setCategory]=useState("NewsOnly")
  let incrementPageSize=()=>{
    setPageSize(pageSize+6);
    console.log(pageSize);
    setPage(page+1);
    console.log("increment");
    let api = `https://newsapi.org/v2/top-headlines?country=in&pageSize=6&page=${page}&category=${category}&apiKey=f430aaa90fef4dfbb88710703f906ae1`;
      fetch(api).then(async (data) => {
        let x = await data.json();
        setArticle(article.concat(x.articles));
        setTotalResult(x.totalResults)
  });
}
  let make_call = (e) => {
    if (e === "NewsOnly") {
      setArticle(null);
      setCategory("NewsOnly");
    }
    else {
      setProgress(0);
      setCategory(e);
      console.log(e);
      let api = `https://newsapi.org/v2/top-headlines?country=in&pageSize=6&page=${page}&category=${e}&apiKey=f430aaa90fef4dfbb88710703f906ae1`;
      setProgress(30);
      fetch(api).then(async (data) => {
        let x = await data.json();
        setProgress(50);
        setArticle(x.articles);
        setProgress(100);
        setTotalResult(x.totalResults)
      });
      
    }
  }
  let modesetter = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#151719";
      document.body.style.color = "white";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }
  return (
    <>
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <Navbar mode={mode} make_call={make_call} modesetter={modesetter} />
      <div className="conainer">
        <div className="row justify-content-center">
          <div className='col-md-4'>
            <h3>Welcome to {category[0].toUpperCase()+category.slice(1)}</h3>
          </div>
        </div>
        {article === null ? <Home /> :
          <Router>
            <Routes>
              <Route exact path="/" element={
                <News hasMore={totalResult} pageSize={pageSize}  pgsize={incrementPageSize} article={article} mode={mode} />} />
              <Route exact path="/business" element={
                <News hasMore={totalResult} pageSize={pageSize} pgsize={incrementPageSize} article={article} mode={mode} />} />
              <Route exact path="/entertainment" element={
                <News hasMore={totalResult} pageSize={pageSize} pgsize={incrementPageSize} article={article} mode={mode} />} />
              <Route exact path="/general" element={
                <News hasMore={totalResult} pageSize={pageSize} pgsize={incrementPageSize} article={article} mode={mode} />
              }>

              </Route>
              <Route exact path="/health" element={
                <News hasMore={totalResult} pageSize={pageSize} pgsize={incrementPageSize} article={article} mode={mode} />
              }>
              </Route>
              <Route exact path="/science" element={
                <News hasMore={totalResult} pageSize={pageSize} pgsize={incrementPageSize} article={article} mode={mode} />
              }>
              </Route>
              <Route exact path="/technology" element={
                <News hasMore={totalResult} pageSize={pageSize} pgsize={incrementPageSize} article={article} mode={mode} />
              }>

              </Route>
            </Routes>
          </Router>}
      </div>
    </>
  );
}

export default App;
