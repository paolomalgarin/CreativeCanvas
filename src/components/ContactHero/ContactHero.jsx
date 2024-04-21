import "../../.vars.css"
import "./ContactHero.css"
import instaLogo from "../../assets/svg/intsagram-logo.svg"
import gmailLogo from "../../assets/svg/gmail-logo.svg"

function ContactHero() {

    return (
        <div className="ContactHero">
            <div className="contatti">
                <a href="https://www.instagram.com/paolomalgarin/" target="_blank" >
                    <p className="contact" id="insta">@PAOLOMALGARIN</p>
                    <img src={instaLogo} alt="" className="contact-logo"/>
                </a>
                <a href="mailto:pmalgarin@chilesotti.it?subject=RICHIESTA%20DI%20CONSULENZA" target="_blank">
                    <p className="contact" id="gmail">PMALGARIN@CHILESOTTI.IT</p>
                    <img src={gmailLogo} alt="" className="contact-logo"/>
                </a>
            </div>
        </div>
    )
}

export default ContactHero;