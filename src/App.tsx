import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./PageNotFound";
import "./App.css";
import UserList from "./UserList";

const App = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div className="container">
        <nav className="mb-3">
          <ul className="nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/cinnfs11025-sen-05pm-live">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cinnfs11025-sen-05pm-live/about-us">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cinnfs11025-sen-05pm-live/contact?page=true" state={{ isLoggedin: true }}>
                Contact
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/cinnfs11025-sen-05pm-live/users" end={true}>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/cinnfs11025-sen-05pm-live" element={<Home />} />
          <Route path="/cinnfs11025-sen-05pm-live/about-us" element={<About />} />
          <Route path="/cinnfs11025-sen-05pm-live/contact" element={<Contact />} />
          <Route path="/cinnfs11025-sen-05pm-live/users" element={<UserList />} />
          <Route path="/cinnfs11025-sen-05pm-live/*" element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
