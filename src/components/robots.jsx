import React from 'react';

import Robot from "./robot";

import "../scss/robots.scss";

const Robots = (props) => {
    return ( 
        <div id="robots">
            {props.robots.map((item, index) => (
                <Robot robot={item} key={index} index={index}/>
            ))}
        </div>
    );
}

export default Robots;