import React from "react";
import { Navbar } from "react-bootstrap";
import {logout} from  "../../../pages/login/loginAction"

import {useDispatch,useSelector} from "react-redux"
import {useHistory,Link} from "react-router-dom"


const Header = () => {
         const dispatch = useDispatch();
           const history = useHistory();
           const {adminProfile} =useSelector (state => state.profile)
  const  handleOnLogOut = () =>{
  
  dispatch(logout(adminProfile._id));
  history.push("/")

  }
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <i className="fas fa-bell text-success"></i>
        </Navbar.Text>
        <Navbar.Text onClick={handleOnLogOut} style={{cursor:"pointer"}}>
          <i className="fas fa-user text-primary"></i> Log Out
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
