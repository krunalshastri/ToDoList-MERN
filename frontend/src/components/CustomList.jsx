import React, { useParams, useEffect, useState } from "react";
import ListArea from "./ListArea";
import ListItems from "./ListItems";
import axios from "axios";

function CurTitle(props) {
    const [isMounted, setMounted] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (isMounted) {
            axios.get("http://localhost:5000/todoItems/" + props.title)
                .then((finalList) => {
                    setItems(finalList.data);
                    console.log(finalList.data);
                }
                );

        }
        setMounted(false);
    }, [isMounted]);

    function addItem(newItem, list) {
        axios.post("http://localhost:5000/todoItems/add", { newItem, list })
            .then(() => {
                console.log("Added!!");
                setMounted(true);
            });
    }

    function deleteItem(id, listName) {
        axios.delete("http://localhost:5000/todoItems/delete/" + listName + "/" + id)
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