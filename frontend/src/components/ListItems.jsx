import React, { useEffect, useState } from "react";
import DisplayItem from "./DisplayItem";

function ListItems(props) {

    const [newItem, setNewItem] = useState("");

    function handleOnChange(event) {
        setNewItem(event.target.value);
    }

    function addOnChange(event) {
        props.addItem(newItem, props.title);
        event.preventDefault();
        setNewItem("");
    }

    function deleteOnChange(id,title) {
        props.deleteItem(id,title);
    }

    return (
        <div className="box">
            {props.items.map((todoItem) => {
                return (
                    <DisplayItem
                        name={todoItem.name}
                        key={todoItem._id}
                        id={todoItem._id}
                        title={props.title}
                        deleteOnChange={deleteOnChange}
                    />
                );
            })}

            <input
                type="text"
                name="newItem"
                placeholder="Add New Item"
                autocomplete="off"
                onChange={handleOnChange}
                value={newItem}
            />
            
            <button
                type="submit"
                name="list"
                value={props.title}
                onClick={addOnChange}
            >+</button>
        </div>
    );
}

export default ListItems;