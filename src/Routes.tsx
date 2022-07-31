import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";

const Routes = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route component = { Home } path="/" exact />

                <Route component = { Search } path="/search" exact />

            </Switch>


        </Router>
    );
}

export default Routes;