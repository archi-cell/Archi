import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
    return (
        <div className="home">
            <h1>Hi 👋 My Name is Archi</h1>
            <p className="about">
                I build scalable, high-performance web applications with modern UI, clean architecture, and real-world impact.
            </p>

            <div className="home-buttons">
                <Link to="/projects" className="btn">View Projects</Link>
                <Link to="/contact" className="btn outline">Contact Me</Link>
            </div>
        </div>
    );
}

export default Home;