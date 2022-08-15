import React from "react"
import mailIcon from "../img/mail.png"
import linkedinIcon from "../img/linkedin.png"


export default function Buttons() {
    return (
        <div className="buttons">
            <button className="buttonMail" onClick={myMail}><img src={mailIcon} alt="Mail" />Email</button>
            <button className="buttonLinkedin" onClick={myLinkedin}><img src={linkedinIcon} alt="Linkedin" />Linkedin</button>
        </div>
    )
}

function myMail() {
    window.location.href = "mailto:ridhwan.alabi@gmail.com";
}
function myLinkedin() {
    window.location.href = "https://www.linkedin.com/in/ridwan-alabi-069317246";
}