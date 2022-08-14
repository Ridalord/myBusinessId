import React from "react"
import Facebook from "../img/Facebook Icon.png"
import Twitter from "../img/Twitter Icon.png"
import Insta from "../img/Instagram Icon.png"
import GitHub from "../img/GitHub Icon.png"




export default function Footer() {
    return (
        <footer>
            <a href="https://twitter.com/Alabyseun?t=w_wkVzilXsluvhh0ElCpww&s=08" alt="Twitter"><img src={Twitter} /></a>
            <a href="https://www.facebook.com/profile.php?id=100009876469282" alt="Facebook"><img src={Facebook} /></a>
            <a href="https://www.instagram.com/alaby_seun" alt="Instagram"><img src={Insta} /></a>
            <a href="github.com/Ridalord" alt="GitHub"><img src={GitHub} /></a>
        </footer>
    )
}