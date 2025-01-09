
import Navbar from "./Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./Pages";
import About from "./Pages/About";
import Blog from "./Pages/blog";
import Jokes from "./Pages/jokes";
import "./Pages/blog.css"

// setting up the pages
function App() {
    return (
        
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route
                    path="/jokes"
                    element={<Jokes />}
                />
            </Routes>
        </Router>


    );
}

export default App;
