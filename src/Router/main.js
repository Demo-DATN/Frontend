import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../View/admin/dashboard";
import Homepage from "../View/client/homepage";
import LayoutAdmin from "../View/layout/admin";
import LayoutClient from "../View/layout/client";

const RouterMain = (props) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/admin/:path?/:path?/:path?" >
                    <LayoutAdmin>
                        <Switch>
                            <Route exact path="/admin/dashboars">
                                <Dashboard/>
                            </Route>
                            <Route exact path="/admin">
                                <Dashboard/>
                            </Route>
                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route>
                    <LayoutClient>
                        <Route exact path="/">
                            <Homepage/>
                        </Route>
                        <Route exact path="/home">
                            <Homepage/>
                        </Route>
                    </LayoutClient>
                </Route>
            </Switch>
        </Router>
    )
}

export default RouterMain
