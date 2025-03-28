import { useSelector } from "react-redux";
import "../../.vars.css"
import "./ProjectHero.css"
import { useEffect, useState } from "react";
import usePreloadImage from "../../redux/hooks/usePreloadImage";
import useSwipeDetector from "../../redux/hooks/useSwipeDetector";


function ProjectHero() {
    const projects = [...useSelector((state) => state.projects.value)].reverse();
    const [current, setCurrent] = useState(0);
    const [searchBarValue, setSearchBarValue] = useState("");
    const [slide, setSlide] = useState(0);


    // -------------------------------------------------- HANDLE EVENTI --------------------------------------------------

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



    // -------------------------------------------------- ALTRO --------------------------------------------------

    const changeCurrentProject = (value) => {
        setCurrent(value);
        setSlide(1);
    }

    // fa il preload delle immagini quando cambio progetto per avere le immagini pronte e non dare poblemi durante lo switch
    usePreloadImage(projects[current + 1]?.imgURL);  //il ? è come un if(projects[current + 1]) => (se esiste projects[current + 1])
    usePreloadImage(projects[current - 1]?.imgURL);

    //allo swipe cambio progetto
    useSwipeDetector({
        onSwipeRight: handleLeftClick,  //inverto per i gesti
        onSwipeLeft: handleRightClick,
        onSwipeUp: () => { },
        onSwipeDown: () => { }
    });

    //al click delle freccette cambio il progetto
    document.onkeydown = (e) => {

        e = e || window.event;

        if (e.keyCode == '38') {
            // up arrow
        }
        else if (e.keyCode == '40') {
            // down arrow
        }
        else if (e.keyCode == '37') {
            // left arrow
            handleLeftClick();
        }
        else if (e.keyCode == '39') {
            // right arrow
            handleRightClick();
        }

    }

    return (
        <div className="ProjectHero" data-swipe-threshold="20"
            data-swipe-timeout="500"
            data-swipe-ignore="false">
            {/* slide è un attributo che indica se deve essere animato o no il componente (viene animato con changeCurrentProject) */}
            <div className="info" slide={slide} onAnimationEnd={() => setSlide(0)}>
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