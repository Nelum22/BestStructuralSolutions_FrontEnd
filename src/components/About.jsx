import React from "react";
import { ImMail2, ImPhone } from "react-icons/im";
import { ImLocation } from "react-icons/im";




export default function Ab(){
    return(
        
        <div className="About">
            <div>

<p> ABOUT US <br/>

Best Solutionss Engineering Consultants is a premier,<br/>
fully integrated professional and technical services<br/>
 firm 
established to provide a vast range of engineering 
services

</p>
</div>


<div>NAVIGATE<br/>
<p/>Home<br/>AboutUs<br/>Projects<br/>Services</div>

<div>CONTACT US <br/>
<ImPhone/> +94715678755 , +94772356897<br /> 
<address><ImLocation/>1570/3,Polhena, Kottawa , Pannipitiya.<br/>
<ImMail2/>bsshrnew@gmail.com<br/>
<ImMail2/>bssengineering@gmail.com</address>
</div>
        </div>
       
    );

}

