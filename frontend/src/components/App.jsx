import React, {useState } from "react";
import { BrowserRouter as Router, Route, useParams } from "react-router-dom";
import Footer from "./Footer";
import CustomList from "./CustomList";

function App() {
    const [curT, setCurT] = useState("Today");
    const [isCustom, setCustom] = useState(false);

    function AddTitle()
    {
        let {title} = useParams();
        title && setCurT(title) && setCustom(true);
        console.log(curT); 
        return (
            <CustomList title = {curT}  />
        );
    }

    return (
        <Router>
            <div>
                <Route exact path="/:title"> <AddTitle /> </Route>
                {!isCustom && <Route exact path="/"> <CustomList title="Today" /> </Route>}
            </div>
            <Footer />
        </Router>
    );
}

export default App;