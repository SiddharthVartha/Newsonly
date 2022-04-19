import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  
function Navbar(props) {
    return (
        <>
            <Router>
                <nav className={props.mode === "light" ? "navbar navbar-expand-lg navbar-light bg-light" : "navbar navbar-expand-lg navbar-dark bg-dark"}>
                    <div className="container-fluid">
                        <Link className="navbar-brand" onClick={()=>props.make_call("NewsOnly")} to="/">NewsOnly</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" onClick={()=>props.make_call("sports")} aria-current="page" to="/">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" onClick={()=>props.make_call("business")} to="/business">Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" onClick={()=>props.make_call("entertainment")} to="/entertainment">Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" onClick={()=>props.make_call("general")} to="/general">General</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" onClick={()=>props.make_call("health")} to="/health">Health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" onClick={()=>props.make_call("science")} to="/science">Science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" onClick={()=>props.make_call("technology")} to="/technology">Technology</Link>
                                </li>
                            </ul>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" onChange={() => props.modesetter()} id="flexSwitchCheckDefault" />
                                <label className="form-check-label" for="flexSwitchCheckDefault">Enable Dark Mode</label>
                            </div>
                        </div>
                    </div>
                </nav>
            </Router>
        </>
    );
}

export default Navbar;