import React, { useContext } from 'react';
import './css/navbar.css';
import { Link, useHistory } from 'react-router-dom';
import firebase from '../firebase';
import { UserContext } from '../App';

function Navbar() {
    const history = useHistory()
    const {state, dispatch} = useContext(UserContext);

    const logout = () => {
        firebase.logout();
        localStorage.clear()
        dispatch({type:"CLEAR"})
        history.push('/')
    }

    const renderList = () => {
        if(state) {
            return [
                <Link to="/admin/panel" className="my-2 my-sm-0 mr-2 ml-3 btn btn-primary" key="3">Panel</Link>,
                <button className="btn btn-dark my-2 my-sm-0" type="button" onClick={() => logout()} key="2">Logout</button>
            ]
        }
        else {
            return [
                <Link className="btn btn-danger my-2 ml-3 my-sm-0" type="button" to="/admin/login" key="1">Admin</Link>
            ]
        }
      }

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/store">Store</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <div className="row my-2 my-lg-0">
                            { renderList() }
                        </div>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
} 

export default Navbar;
