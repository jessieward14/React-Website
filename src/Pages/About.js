import React from "react";

const About = () => {
    // what I am printing in the about me page
   
    document.body.style.backgroundColor = "rgb(185,205,230)";
    document.body.style.marginBottom = "0px";
    document.body.style.textAlign = "center";
    document.body.style.padding = "20 px";
   
    



    
    return (
        <div className = "About">

            <h1>
                What to know about my website?
            </h1>
            <p> See the Blogs page to view some cool dishes!</p>
            <p> See the Jokes page if you want some good jokes!</p>
        </div>
    );

    
    
};

export default About;