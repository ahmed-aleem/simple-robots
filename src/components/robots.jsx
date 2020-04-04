import React from 'react';

import Robot from "./robot";

import RobotsList from "../util/robots-data";


const Robots = () => {
    return ( 
        <div>
            {RobotsList.map((item, index) => (
                <Robot robot={item} key={index} index={index}/>
            ))}
        </div>
    );
}

export default Robots;