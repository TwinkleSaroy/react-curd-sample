import React from 'react';
import {BrowserRouter as  Router, Route, Switch} from 'react-router-dom';
import AddUser from './AddUser';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Curd from './Curd';
import {Link} from 'react-router-dom';
import Edit from './Edit';
import User from './User';


function App(props) {
  return (
    <Router>
    <div className='App'>

      

      <Switch>
<Route exact path ='/' component={Curd}></Route>

        <Route exact path ='/adduser' component={AddUser}></Route>
        <Route exact path ='/edit/:id' component={Edit}></Route>
        <Route exact path ='/user/:id' component={User}></Route>

      </Switch>

    </div>
    </Router>
  )
}

export default App;
