import React from "react";
import Image from 'react-bootstrap/Image';
import Navigation from "./Navigation";
import Ab from "./About";

const one= new URL("../images/four.jpg", import.meta.url)
const two = new URL("../images/two.jpg", import.meta.url)

export default function Project1(){
    return(
        <div className="bb">
           <Navigation/>
           <h1>Extension of Southern Expressway (ESE) SriLanka</h1>
           <div className="ll">
           <div>
            <h4>Project Infomation</h4>
            <h4>Category</h4>
            <h6>Engineering Design</h6>
            <p>This is the extension of Colombo – Matara expressway to Hambantota. Total length of the section is 30 km and going to be completed in two stages. Initial stage is 4 traffic lanes and the ultimate stage is 6 traffic lanes which has width of 3m and 30.5m respectively. This project is funded by EXIM bank and the main contractor is China National Aero-Technology Import & Export Corporation (CATIC), China. Total project cost is 860 USD million.

AVEK is responsible for the structural design of 9 km long viaducts, underpass bridges, overpass bridges, underpass culverts and box culverts, including the designs of pile foundations and 6 span continuous and simple supported ‘T’ girders. The design has been carried out for Engineering Design and Project Management Consultants (Pvt) Ltd, the main designer of the project.</p>
                </div>

            <div className="project1">
             <Image src={one} fluid />;
             <Image src={two} fluid />;
               </div>
               </div>
           <Ab/>    
        </div>
       
    );

}

