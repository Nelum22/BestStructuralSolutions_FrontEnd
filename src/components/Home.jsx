import React from "react";
import Navigation from "./Navigation";
import LandCarousel from "./learn";
import Client from "./Clients";
import Ab from "./About";



export default function Home(){
    return(
        <div className="bb">
           <Navigation/>
<div id="header">
<h1>Engineering Solutions Extend Beyond Simple Providing Engineering Data</h1>
</div>
<LandCarousel/>

<Client/>
<Ab/>
<footer>
© 2023 Best Solutions Engineering Consultants (PVT) LTD.</footer>
        </div>
       
    );

}

