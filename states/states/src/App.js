import React from 'react'
import "./App.css"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";

import About from './components/router/About'
import Home from './components/router/Home'
import Users from './components/router/Users'
import Error404 from './components/router/Error404'
import States from './statesApp';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <NavLink exact activeStyle={{ backgroundColor: "Black", color: "#fff", padding: "2px" }} to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeStyle={{ backgroundColor: "Black", color: "#fff", padding: "2px" }} to="/about">
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeStyle={{ backgroundColor: "Black", color: "#fff", padding: "2px" }} to="/users">
                                Users
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/users" component={Users} />
                    <Route path="*" component={Error404} />
                </Switch>
            </div>
        </Router>
    )
}

export default App
