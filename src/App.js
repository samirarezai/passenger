import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import EnterMobile from "./components/login/enterMobile";

import NotFound from "./components/404/notFound";
import Helmet from 'react-helmet';
import EnterCode from "./components/login/enterCode";
import Profile from "./components/login/profile";
import MapPage from "./components/trips/mapPage";

class App extends Component {
    render() {
        return (
            <>
                <Router>
                   {/* <Helmet>
                        <meta charSet="utf-8"/>
                        <title>My Title</title>
                    </Helmet>*/}
                    <Switch>
                        <Route path="/" exact component={EnterMobile}/>
                        <Route path="/enter-code" exact component={EnterCode}/>
                        <Route path="/profile" exact component={Profile}/>
                        <Route path="/map" exact component={MapPage}/>
                        <Route path="*" exact component={NotFound}/>
                    </Switch>


                </Router>
            </>
        );
    }
}

export default App;
