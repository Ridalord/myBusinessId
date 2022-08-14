import React from "react"; 
import Details from "./Components/userDetails";
import Buttons from "./Components/buttons";
import About from "./Components/userAbout";
import Footer from "./Components/footer";



export default function App() {
    return (
        <div className="wrapper">
            <div className="container">
                <Details />
                <Buttons />
                <About />
                <Footer />
            </div>  
        </div>
    )
}
