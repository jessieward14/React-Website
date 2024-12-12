
import Navbar from "./Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./Pages";
import About from "./Pages/About";
import Blog from "./Pages/blog";
import SignUp from "./Pages/signup";
import Contact from "./Pages/contact";

function App() {
    return (
        
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route
                    path="/contact"
                    element={<Contact />}
                />
                <Route path="/blog" element={<Blog />} />
                <Route
                    path="/signup"
                    element={<SignUp />}
                />
            </Routes>
        </Router>
    );
}

export default App;
