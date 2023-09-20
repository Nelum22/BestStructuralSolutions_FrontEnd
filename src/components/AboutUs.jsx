import React from "react";
import { Navbar } from "react-bootstrap";
import Team from "./Team";
import Team1 from "./Team1";
import Navigation from "./Navigation";
import Ab from "./About";

export default function About(){
    return(
        <div>
            <Navigation/>
            <div id="about">
            <h1>About</h1>
            <h4>Who We Are</h4>
            <div/>
           
            <div id="who">
                <h1>Who We Are</h1>
                <h6>With a name that means "BSS " Best Structural Solutions Engineering Pvt Ltd has been providing creative & economical  solutions to meet the needs of our clients. Our Goal is to fulfill the expectation of our every Client by offering outstanding customer service, increase the flexibility & greater value of improving efficiency.
With an experienced workforce, a qualified Technical staff, we at BSS Engineering Pvt LTD are willing to rise up to any challenge that may be presented to us.</h6>
</div>


          <div id="client">
          <h1>Outstanding Client Service</h1>
          <h6>Simply, when our clients are successful, we are successful. We are making our clients our highest priority. They deserve our best and we are determined to deliver it to them. Our approach is to be straightforward, listen carefully, respond quickly and use our talent and experience to accomplish the goals of our clients.</h6>
          </div>



          <div id="team">
          <h1>Our Team</h1></div>

          <div className="ll">
           <div>
                <h4>Managing Director</h4>
                 <Team/>
                <p>Chartered Engineer,MIE(SL),M.Sc.Eng.(Structural),<br/>
B.Sc.Eng (Hons),<br/>
Practicing Engineer since 2007</p></div>

            <div className="indika">
               <p>"Eng.Indika is a chartered Engineer in Sri Lanka expertise specially in Bridges & Buildings for more than 16 years. He worked as a Bridge Design Engineer in major infrastructure projects in Sri Lanka, Central Expressway Project section 2 & section 3 etc."</p>
               </div>
               </div>
             
               
              

               <div className="ll">
            <div>
                <h4>Director</h4>
                 <Team1/>
                <p>Chartered Engineer,MIE(SL),Ph.D.(Cambridge),<br/>
B.Sc.Eng.(1st class Hons),<br/>
Practicing Engineer since 2006</p>
                </div>
            <div className="hiran">
               <p>"Dr.Hiran Yapa is one of the few chartered Structural experts in Sri Lanka, who engaged in a vast variety of aspects in Structural Engineering. His expertise in Retrofitting of Buildings, Strengthened behaviour prediction & Structural Optimization acknowledged by the Industry as he was entrusted to carry out all sorts of challenging optimized Structural designs for more than 18 years.""
</p>
                </div>
                </div>
      
                <Ab/>
</div>

      
               
                
       
       </div>
       
    );
}