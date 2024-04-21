import { useSelector } from "react-redux";
import "../../.vars.css"
import "./ProjectHero.css"
import { useState } from "react";


function ProjectHero() {
    const projects = [...useSelector((state) => state.projects.value)].reverse();
    const [current, setCurrent] = useState(0);
    const [searchBarValue, setSearchBarValue] = useState("");

    const changeCurrentProject = (value) => {
        setCurrent(value);
    }

    const handleLeftClick = () => {
        if (current > 0)
            changeCurrentProject(current - 1);
    }
    const handleRightClick = () => {
        if (current < projects.length - 1)
            changeCurrentProject(current + 1);
    }

    const handleSearch = (e) => {
        e.preventDefault();

        if (searchBarValue !== "") {
            const p = projects.filter(pr => pr.name.toLowerCase().includes(searchBarValue.toLowerCase()))
            if (p[0])
                setCurrent(projects.length - 1 - p[0].id);
            // else
            //     alert("Il progetto " + searchBarValue + " NON esiste.");
        }

        setSearchBarValue("");
    }

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
                <div className="next-left" onClick={handleLeftClick} />
                <form action="" className="search">
                    <input type="text" value={searchBarValue} onChange={(e) => setSearchBarValue(e.target.value)} className="search-bar" placeholder="Search..." />
                    <input type="submit" value="" className="submit" onClick={handleSearch} />
                </form>
                <div className="next-right" onClick={handleRightClick} />
            </div>
        </div>
    )
}

export default ProjectHero;