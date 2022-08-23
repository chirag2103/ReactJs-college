import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import logo from './3.jpg';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Blog from './screens/Blog';
import SignIn from './screens/SignIn';
function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <nav className="navbar max-width-1">
            <div className="left-nav">
              <span>
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </span>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/blog">Blogs</Link>
                </li>
                <li>
                  <Link to="">Contact Us</Link>
                </li>
                <li>
                  <Link to="">About Us</Link>
                </li>
              </ul>
            </div>
            <div className="right-nav">
              <input
                className="form-input"
                type="text"
                name="search"
                placeholder="Search Here"
              />
              <button className="btn" type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
              <Link to="/SignIn">Sign In</Link>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/SignIn" element={<SignIn />} />
          </Routes>
          
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
