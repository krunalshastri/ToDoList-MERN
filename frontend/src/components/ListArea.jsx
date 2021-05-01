import React from "react";

function ListArea(props) {
    return (
        <div className="box" id="heading">
            <h1>
                {props.title}
            </h1>
        </div>
    );
}

export default ListArea;