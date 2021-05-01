import React, {useEffect, useState } from "react";
import ListArea from "./ListArea";
import ListItems from "./ListItems";
import axios from "axios";

function CurTitle(props) {
    const [isMounted, setMounted] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (isMounted) {
            axios.get("https://todolist-mern-app.herokuapp.com/todoItems/" + props.title)
                .then((finalList) => {
                    setItems(finalList.data);
                }
                );
        }
        setMounted(false);
    }, [isMounted, props.title]);

    function addItem(newItem, list) {
        axios.post("https://todolist-mern-app.herokuapp.com/todoItems/add", { newItem, list })
            .then(() => {
                console.log("Added!!");
                setMounted(true);
            });
    }

    function deleteItem(id, listName) {
        axios.delete("https://todolist-mern-app.herokuapp.com/todoItems/delete/" + listName + "/" + id)
            .then(() => {
                console.log("Deleted!!");
                setMounted(true);
            }
            );
    }

    return (
        <div>
            <ListArea
                title={props.title}
                addItem={addItem}
                items={items}
                deleteItem={deleteItem} />
            <ListItems
                title={props.title}
                addItem={addItem}
                items={items}
                deleteItem={deleteItem} />
        </div>
    );
}

export default CurTitle;