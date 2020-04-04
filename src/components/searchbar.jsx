import React from 'react';

import "../scss/search.scss";

const Search = (props) => {
    return ( 
        <div id="search">
            <input type="text" value={props.text} onChange={props.handleRobots} placeholder="Search"/>
        </div>
    );
}

export default Search;