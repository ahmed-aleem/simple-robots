import React from 'react';

const Robot = (props) => {

    return (
        <div id={props.index}>
            <img src={props.robot.photo} alt=""/>
            <h2>{props.robot.name}</h2>
            <p><strong>Special Ability:</strong> {props.robot.specialAbility}</p>
        </div>
    );
}

export default Robot;