import ProjectCard from "../components/ProjectCard";
import "../styles/projects.css";

import eventopia from "../images/eventopia.png";
import vibechat from "../images/vibechat.png";
import vibra from "../images/vibra.png";

function Projects() {
    const projects = [
        {
            image: eventopia,
            title: "Eventopia - Full Stack Event Booking Platform",
            description: "Created an end-to-end event booking application with features like event selection, venue & catering booking, calendar-based date reservation, cart system, and checkout page. Implemented interactive UI components and real-time chat support. Strengthened skills in frontend development, REST APIs, backend logic, and real-time communication using React, JavaScript, Node.js, Express, MongoDB, and Socket.IO",
            link: "https://eventopia-backend-eight.vercel.app"
        },
        {
            image: vibechat,
            title: "Vibechat - A Real Time Chat App",
            description: "Built a full-stack real-time chat application enabling users to communicate instantly with online presence tracking",
            link: "https://vibechat-frontend.vercel.app"
        },
        {
            image: vibra,
            title: "Vibra - Full Stack Web Application",
            description: "It is an upgraded version of Eventopia - Event Booking platform having user,event,booking models storing in databased, no hardcoded. Vibra also have two AI features , AI description generator for admin to create event and AI Recommendations for users to book events. Admin credentials are admin(username) admin123(password) required for create event and admin dashboard",
            link: "https://vibra-frontend-alpha.vercel.app"
        }
    ];

    return (
        <div className="projects">
            <h1>My Projects</h1>
            <div className="project-grid">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
}

export default Projects;