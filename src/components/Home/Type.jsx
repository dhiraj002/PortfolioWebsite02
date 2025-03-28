import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
            options={{
                strings: ["MERN Stack Developer", "Shopify Developer", "Committed Open Source Contributor", "Effective Problem Solver"],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
};

export default Type;
