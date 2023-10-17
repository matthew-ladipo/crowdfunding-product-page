import React, { useState } from "react";
import "../navigation/navigation.css";
import About from "../component/About/About";
import Stats from "../component/stats/stats";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Bookmark from "../component/bookmark/bookmark";

const Navigation = () => {
  const navItems = ["about", "discover", "get started"];
  const [Mobile, setMobile] = useState(false);

  return (
    <div>
      <header className="header">
        <nav className="nav">
          <h3 className="h3">crowdfund</h3>

          <ul
            className={Mobile ? "ulmedia" : "ul"}
            onClick={() => setMobile(false)}
          >
            {navItems.map((item, index) => (
              <li key={index} className="liss">
                {item}
              </li>
            ))}
          </ul>
          <div onClick={() => setMobile(!Mobile)} className="icons">
            {" "}
            {Mobile ? (
              <ImCross style={{ color: "white" }} />
            ) : (
              <FaBars style={{ color: "white" }} />
            )}
          </div>
        </nav>
      </header>
      <Bookmark />
      <Stats />
      <About />
    </div>
  );
};

export default Navigation;
