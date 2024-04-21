import { useSelector } from "react-redux";
import "../../.vars.css"
import "./ProjectHero.css"
import { useState } from "react";

function ProjectHero() {
    const projects = useSelector((state) => state.projects.value);
    const [current, setCurrent] = useState(0);

    return (
        <div className="ProjectHero">
            <div className="info">
                <a href={projects[current].link} className="site-img-container" target="_blank"><img src={projects[current].imgURL} alt="" className="site-img" /></a>
                <div className="data">
                    <h2 className="site-name">{projects[current].name}</h2>
                    <p className="site-decription">{projects[current].description}</p>
                </div>
                <div className="extra">
                    <p className="date">CREATO NEL {projects[current].year}</p>
                    <a href={projects[current].link} className="link" target="_blank">{projects[current].link}</a>
                </div>
            </div>

            <div className="events">
                <div className="next-left"></div>
                <form action="" className="search">
                    <input type="text" name="" id="" className="search-bar" />
                    <input type="submit" value="" className="submit" />
                </form>
                <div className="next-right"></div>
            </div>
        </div>
    )
}

export default ProjectHero;