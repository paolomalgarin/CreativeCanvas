import { Link } from 'react-router-dom';
import '../../.vars.css'
import './Navbar.css'

import logo from "../../assets/svg/logo.svg"
import homeIcon from "../../assets/svg/home-icon.svg"
import projectsIcon from "../../assets/svg/projects-icon.svg"
import contactsIcon from "../../assets/svg/contacts-icon.svg"
import copyrightIcon from "../../assets/svg/copyright-icon.svg"
import { useEffect, useState } from 'react';


// ------------------------- FUNZIONE -------------------------
function Navbar() {

    const [isCopyrightShown, setCopyrightShown] = useState(false);
    const [isMenuShown, setMenuShown] = useState(true);

    const showHideCopyright = (e) => {
        e.stopPropagation();
        setCopyrightShown(!isCopyrightShown);
    }

    const showHideMenu = () => {
        setMenuShown(!isMenuShown);
        setCopyrightShown(false);
    }

    useEffect(() => {
        showHideMenu();
    }, []);


    return (
        <div className="Navbar">
            <img src={logo} alt="logo" className='logo' />

            <div className="hamburger" onClick={showHideMenu}>
                <div className={`${isMenuShown ? "x" : "line"}`}></div>
            </div>

            <div className={`menu ${isMenuShown ? "" : "hideMenu"}`}>
                <div className="xCover"></div>

                {/* links alle pagine */}
                <ul className="actions" onAnimationEnd={() => { const actions = document.querySelector('.actions'); if(actions) (isMenuShown) ? document.querySelector('.actions').style.display = "" : document.querySelector('.actions').style.display = "none" }}>
                    <li id='home-icon'><Link to={"/"}>
                        <img className='action-icon' src={homeIcon} alt="" />
                    </Link></li>
                    <li id='projects-icon'><Link to={"/projects"}>
                        <img className='action-icon' src={projectsIcon} alt="" />
                    </Link></li>
                    <li id='contacts-icon'><Link to={"/contacts"}>
                        <img className='action-icon' src={contactsIcon} alt="" />
                    </Link></li>
                </ul>

                {/* copyright link */}
                <img className="copyright" src={copyrightIcon} alt="" onClick={showHideCopyright} />
            </div>

            {/* altro copyright */}
            <div className={`${isCopyrightShown ? "" : "hideCopyright"} copyright-overlay`} onClick={showHideCopyright}>
                <div className="copyright-box">
                    <h2>©2024 PAOLO MALGARIN.</h2>
                    <h3>Tutti i diritti riservati.</h3>
                </div>
            </div>
        </div >
    )
}

export default Navbar;