import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from "./NavigationBar";

import "../../css/App.scss";
import "./general.scss";
import "bootstrap/dist/css/bootstrap.min.css";

// TODO: check transitions in utilities from react-bootstrap

const App = () => {
    return (
        <Router>
            <div className="App">
                <NavigationBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
