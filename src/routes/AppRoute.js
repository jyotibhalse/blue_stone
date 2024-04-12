import React from "react";
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from '../HomePage/home';
import Login from '../components/user_login/login';
// import Contact from "../dotcom/contact/contact";
function AppRoute(props) {
    return (
      <Router {...props}>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          {/* <Route exact path="/contact" element={<Contact/>}/> */}  
        </Routes>
      </Router>
    );
  }
  export default AppRoute;
  
