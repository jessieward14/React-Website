// Filename - pages/index.js

import React from "react";

//what shows up when you npm run start
const Home = () => {
    document.body.style.textAlign = "center";
    document.body.style.fontSize = "23px";

    return (
        <div>
            <h1 >Welcome to Jessie's Website!</h1>
        </div>
    );
};

export default Home;