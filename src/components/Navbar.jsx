import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();
    return (
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <Link class="navbar-brand" to="/" id="myName">David Pan</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1">
          <span class="navbar-toggler-icon"></span>
      </button>
          <div class="collapse navbar-collapse navbar-nav justify-content-end" id="navbar1">
            <Link class={location.pathname === "/contact" ? "nav-item nav-link active" : "nav-item nav-link"} to="/contact">Contact <span class="sr-only">(current)</span></Link> 
            <Link class={location.pathname === "/portfolio" ? "nav-item nav-link active" : "nav-item nav-link"} to="/portfolio">Portfolio</Link>
            <Link class={location.pathname === "/" ? "nav-item nav-link active" : "nav-item nav-link"} to="/">About</Link>
          </div>
      </nav>
    );
}