import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, useParams } from "react-router-dom";
import Footer from "./Footer";
import CustomList from "./CustomList";

function App() {
    const [curT, setCurT] = useState("Today");

    function AddTitle()
    {
        let {title} = useParams();
        title && setCurT(title);
        console.log(curT);
        return (
            <CustomList title = {curT}  />
        );
    }

    return (
        <Router>
            <div>
                <Route path="/:title"> <AddTitle /> </Route>
            </div>
            <Footer />
        </Router>
    );
}

export default App;