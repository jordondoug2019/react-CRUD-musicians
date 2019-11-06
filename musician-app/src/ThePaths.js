import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AddMusician from "./AddMusician"
import Home from "./Home"
import EditMusician from "./EditMusician"
import DeleteMusician from "./DeleteMusician"
class ThePaths extends Component
{
    render()
    {
        return (
            <Router>
                <h1> Welcome to the House of Musicians</h1>
                <Link className='link-pretty' to="/"> Home</Link>
                <Link className='link-pretty' to="/add"> Add Musician</Link>
                <Switch>
                    <Route path="/add">
                        <AddMusician/>
                    </Route>
                    <Route path='/edit/:musicianID' component={EditMusician}>
                    </Route>
                    <Route path='/delete/:musicianID' component={DeleteMusician}>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </Router>


    )
        ;
    }
}

export default ThePaths;