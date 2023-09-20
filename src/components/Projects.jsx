import React from "react";
import Navigation from "./Navigation";
import BasicExample from "./ProPictures";
import Ab from "./About";


export default function Home(){
    return(
        <div className="pp">
            <Navigation/>
            <div id="projects">
            <h1>Projects</h1>
<h3>Our Buildings and Projects</h3>
            </div>
            <BasicExample/>
            <Ab/>


        </div>
    );
}