import React, {component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import NavBar from  "./components/Navbar";
/*import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import FileUpload from "./components/FileUpload";
import AssignmentList from "./components/AssignmentList";*/

function App(){
    return(
        <Router>
            <div className="App">
                <NavBar/>
                {/*<Router exact path ="/" component={Landing}/>
                    <div className="container">
                        <Router exact path ="/register" component={Register}/>
                        <Router exact path ="/login" component={Login}/>
                        <Router exact path ="/profile" component={Profile}/>
                        <Router exact path ="/upload" component={FileUpload}/>
                        <Router exact path ="/assignments" component={AssignmentList}/>
                    </div>*/}
            </div>
        </Router>
    )
}

export default App;
