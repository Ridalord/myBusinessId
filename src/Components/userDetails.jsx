import React from "react"
import profileImage from "../img/IMG_2019.jpeg"


export default function Details() {
    return (
        <div className="userDetails">
            <img src={profileImage} alt="Ridwan Alabi" className="profileImage" />
            <h1 className="userName">Ridwan Alabi</h1>
            <p className="userDescription">Frontend Developer</p>
            <a href="ridhwan.alabi@gmail.com" className="userWebsite">ridwanalabi.website</a>
        </div>
    )
}