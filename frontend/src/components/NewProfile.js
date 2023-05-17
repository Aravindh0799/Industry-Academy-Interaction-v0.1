import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Navbar1 from '../components/Navbar1';
import ReactDOM from "react-dom";
// import "./adminHome.css"
import Academy from './academyhome';
import ModalForm from './ProfileModal';
import {Container} from 'react-bootstrap'
function NewProfile() {
    const[modalOpen,setModalOpen] = useState(false);
    const [rowToEdit , setRowToEdit] = useState(null);

    useEffect(() => {
      console.log("inside use effect setModalOpen(true)")
      setModalOpen(true);
    },[])
  return (
    // ReactDOM.createPortal(
    
    <div className='App-new'>
        <Academy></Academy>
        {modalOpen && <ModalForm closeModal={() => {
     setModalOpen(false); 
     setRowToEdit(null);
    }}/>}
        
    </div> 
  //   ,document.querySelector("#modal"))
    
  );
}

export default NewProfile;
