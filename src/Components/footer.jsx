import React from "react"
import Facebook from "../img/Facebook Icon.png"
import Twitter from "../img/Twitter Icon.png"
import Insta from "../img/Instagram Icon.png"
import GitHub from "../img/GitHub Icon.png"




export default function Footer() {
    return (
        <footer>
            <a href="https://twitter.com/Alabyseun?t=w_wkVzilXsluvhh0ElCpww&s=08" ><img src={Twitter} alt="Twitter" /></a>
            <a href="https://www.facebook.com/profile.php?id=100009876469282" ><img src={Facebook} alt="Facebook" /></a>
            <a href="https://www.instagram.com/alaby_seun" ><img src={Insta} alt="Instagram" /></a>
            <a href="https://www.github.com/Ridalord" ><img src={GitHub} alt="GitHub" /></a>
        </footer>
    )
}