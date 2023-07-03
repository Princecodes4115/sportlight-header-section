import React, { useEffect } from "react";
import "./header.css"
import TypeAnimation from "./Typer";
import Search from "./Search";
import HeaderMusics from "./HeaderMusics";

const Header = () => {
  useEffect(() => {
    const spotlight = document.querySelector(".spotlight");

    let spotlightSize = "transparent 160px, rgba(0, 0, 0, 0.85) 200px)";

    const updateSpotlight = (e) => {
      spotlight.style.backgroundImage = `radial-gradient(circle at ${
        (e.pageX / window.innerWidth) * 100
      }% ${(e.pageY / window.innerHeight) * 100}%, ${spotlightSize}`;
    };

    window.addEventListener("mousemove", updateSpotlight);

    window.addEventListener("mousedown", (e) => {
      spotlightSize = "transparent 130px, rgba(0, 0, 0, 0.95) 150px)";
      updateSpotlight(e);
    });

    window.addEventListener("mouseup", (e) => {
      spotlightSize = "transparent 160px, rgba(0, 0, 0, 0.85) 200px)";
      updateSpotlight(e);
    });

    return () => {
      window.removeEventListener("mousemove", updateSpotlight);
    };
  }, []);

  return (
    <section>
      <div className="header_container">
        <div className="spotlight">
          <TypeAnimation />
          <Search />
          <HeaderMusics />
        </div>
      </div>
    </section>
  );
};

export default Header;
