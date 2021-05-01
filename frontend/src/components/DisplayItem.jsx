import React from "react";

function DisplayItem(props) {
    function deleteOnChange(event) {
        props.deleteOnChange(event.target.id,props.title)
    }

    return (
        <div className="item">
            <input type="checkbox" id={props.id} onChange={deleteOnChange} /> 
            <p> {props.name} </p>
        </div>
    );
}

export default DisplayItem;