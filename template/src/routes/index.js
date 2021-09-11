import { Route, Switch, BrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
//SignedOut
import Login from "../pages/SignedOut/Login";
//SignedIn
import Home from "../pages/SignedIn/Home";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <PrivateRoute path="/home"component={Home} />
            </Switch>
        </BrowserRouter>
    )
}