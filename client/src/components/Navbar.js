import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

class Navbar extends Component {

    logOut(e){
        e.preventDefault(); // preventDefault is called on the event when submitting the form to prevent a browser reload/refresh
        localStorage.removeItem('usertoken'); //remove user token
        this.props.history.push('/')
    }


    render() {
       const loginRegLink = (
           <ul className="nav nav-tabs">
               <li className="nav-items">
                   <Link to="/login" className="nav-link">
                        <h1><img src="https://img.icons8.com/color/50/000000/login-rounded-right.png"/>Login</h1>
                   </Link>
               </li>
               <li className="nav-tabs">
                   <Link to="/register" className="nav-link">
                       <h1><img src="https://img.icons8.com/offices/16/000000/registered-trademark.png"/>Register</h1>
                   </Link>
               </li>
           </ul>
       );

       const userLink = (
           <ul className="nav nav-tabs">
               <li className="nav-items">
                   <Link to="/profile" className="nav-link">
                       <h1><img src="https://img.icons8.com/color/48/000000/contract-job.png"/>User</h1>
                   </Link>
               </li>
               <li className="nav-items">
                   <Link to="/upload" className="nav-link">
                       <h1><img src="https://img.icons8.com/color/48/000000/upload.png"/>Assignment Submission</h1>
                   </Link>
               </li>
               <li className="nav-items">
                   <Link to="/assignments" className="nav-link">
                       <h1><img src="https://img.icons8.com/cute-clipart/48/000000/list.png"/>Assignments List</h1>
                   </Link>
               </li>
               <li className="nav-items">
                   <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                       <h1><img src="https://img.icons8.com/cute-clipart/64/000000/logout-rounded-left.png"/>Logout</h1>
                   </a>
               </li>
           </ul>
       );

       return(
           <nav className="navbar navbar-expand-md navbar-light rounded">
               <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar1"
                    aria-controls="#navbar1"
                    aria-expanded="false"
                    aria-label="toggle navigation">

                   <span className="navbar-toggler-icon"/>
               </button>
               <div className="collapse navbar-collapse justify-content-md-center" id='navbar1'>
                   <ul className='nav nav-tabs'>
                       <li className='nav-item'>
                           <Link to = "/" className="nav-link">
                                <h1><img src="https://img.icons8.com/ultraviolet/40/000000/home.png"/>Home</h1>
                           </Link>
                       </li>
                   </ul>
                   {localStorage.userToken ? userLink : loginRegLink}
               </div>
           </nav>
       )
    }
}

export default withRouter(Navbar);
