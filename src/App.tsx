import './App.css';
import React from 'react';
import {Route, Switch,Redirect} from 'react-router-dom';
import LogIn from './components/pages/LogIn';
import SignUp from './components/pages/SignUp';
import DashBoard from "./components/pages/Dashboard";

function App() {
  return (
      <Switch>
        <Route exact path="/" component={DashBoard}/>
          {/*<Redirect to="/login" />*/}
        {/*</Route>*/}
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        {/*<Route path="/workspace/:workspace" component={Workspace} />*/}
      </Switch>
  );
}

export default App;
