import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { StylesProvider } from "@material-ui/core/styles";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

const App = () => {
    return <div>
        <StylesProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/pricing" component={Pricing} />
                </Switch>
            </BrowserRouter>
        </StylesProvider>
    </div>; 
};

export default App;
