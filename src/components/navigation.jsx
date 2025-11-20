import React, { useEffect } from "react";

export const Navigation = (props) => {
  useEffect(() => {
    // Close navbar on link click (for mobile view)
    const navLinks = document.querySelectorAll(".navbar-collapse a");
    const navCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth < 768 && navCollapse.classList.contains("in")) {
          // Bootstrap 3 collapse
          navCollapse.classList.remove("in");
        } else if (
          window.innerWidth < 768 &&
          navCollapse.classList.contains("show")
        ) {
          // Bootstrap 4/5 collapse
          navCollapse.classList.remove("show");
        }
      });
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>

          <img
            style={{
              width: "100px",
              height: "auto",
              marginTop: "10px",
              marginBottom: "20px",
            }}
            src="/img/logo1.jpeg"
            // src="/img/inline_logo2.png"
            alt="Devica Logo"
          />
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Gallery
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
