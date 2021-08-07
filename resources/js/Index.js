import React from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import { AddContact } from './components/AddContact'
import { EditContact } from './components/EditContact'

import Contacts from './components/Contacts'

const Index = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Contacts}/>
                <Route  path="/AddContact" component={AddContact}/>
                <Route  path="/:id/edit" component={EditContact}/>

            </Switch>
        </Router>
    )
}

export default Index

if (document.getElementById('user')) {
    ReactDOM.render(<Index />, document.getElementById('user'));
}