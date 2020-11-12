import React, { useState, useEffect, createContext, useReducer, useContext } from 'react';
import Navbar from './components/Navbar';
import Admin from './components/screens/Admin';
import Home from './components/screens/Home';
import Store from './components/screens/Store';
import Contact from './components/screens/Contact';
import Login from './components/screens/Login';
import firebase from './firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { reducer, initialState } from './reducers/userReducer'
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import Footer from './components/Footer';

toast.configure();
export const UserContext = createContext()

const Routing = () => {
  const history = useHistory();
  const {dispatch} = useContext(UserContext)

  useEffect(() => {
      const user = JSON.parse(localStorage.getItem("user"))
      if(user) {
        dispatch({type:"USER", payload:user})
        history.push("/store")
      } else {
        history.push("/");
      }
  }, [dispatch, history])

  return (
    <Switch>  
      <Route path="/admin/panel" component={Admin} />
    </Switch>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [firebaseInit, setFirebaseInit] = useState(false);

  useEffect(() => {
    firebase.isInit().then(val => {
      setFirebaseInit(val);
    })
  }, [])

  return firebaseInit !== false ? (
    <UserContext.Provider value={{state, dispatch}} >
      <Router>
        <Navbar />
        <Routing />
        <Route exact path="/" component={Home} />
        <Route path="/store" component={Store} />
        <Route path="/contact" component={Contact} />
        <Route path="/admin/login" component={Login} />
        <Footer />
      </Router>
    </UserContext.Provider>
  ) : null;
}

export default App;
