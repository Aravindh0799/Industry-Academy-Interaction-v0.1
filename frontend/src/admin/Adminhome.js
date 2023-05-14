import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Navbar1 from '../components/Navbar1';
import AdminNav from './AdminNav';
import ReactDOM from "react-dom";
import Footer from '../components/footer';
import "./adminHome.css"
import Table from './DataTable';
import Modal from './Modal';
import {Container} from 'react-bootstrap'
function AdminPage() {
 
  const[modalOpen,setModalOpen] = useState(false);
  const[modalOpen1,setModalOpen1] = useState(false);
  const[modalOpen2,setModalOpen2] = useState(false);
  const [rowToEdit , setRowToEdit] = useState(null);
  const [rowToEdit1 , setRowToEdit1] = useState(null);
  const [rowToEdit2 , setRowToEdit2] = useState(null);
 
  const tableHead = {
    col1: 'S.No',
    col2: 'University Name',
    col3: 'Domain',
    col4: 'Actions'
  };

  const tableHead2 = {
    col1: 'S.No',
    col2: 'Youtube URL',
    col3: 'Title',
    col4: 'Actions'
  };

  const tableHead3 = {
    col1: 'S.No',
    col2: 'Newsfeed URL',
    col3: 'Title',
    col4: 'Actions'
  };


  const [rows, setRows] = useState([
   {
     S_no: "1",
     UniName: "PSG College Of Technology",
     Domain: "@psgtech.ac.in",
   },
   {
     S_no: "2",
     UniName: "Bishop Heber College",
     Domain: "@bhc.edu.in",
   },
   {
     S_no: "3",
     UniName: "test",
     Domain: "@test.ac.in",
   },
 ]);
 const [youtubeURL, setYoutubeURL] = useState([
  {
    S_no: "1",
    UniName: "https://youtu.be/Js5UMbD9r5U",
    Domain: "TEDxuTulsa",
  },
  {
    S_no: "2",
    UniName: "https://youtu.be/gOwAWpBeDSg",
    Domain: "TEDxHHL",
  },
  {
    S_no: "3",
    UniName: "https://youtu.be/xz3tjI5cmrQ",
    Domain: "TEDxIIMRanchi",
  },
]);

const [newsFeedURL, setnewsFeedURL] = useState([
  {
    S_no: "1",
    UniName: "https://indianexpress.com/article/education/life-in-an-iit",
    Domain: "IIT-Student Article",
  },
  {
    S_no: "2",
    UniName: "https://timesofindia.indiatimes.com/education/jobs/teacher-jobs/kvs-recruitment-2022",
    Domain: "KVS-Recruitment",
  },
  {
    S_no: "3",
    UniName: "https://timesofindia.indiatimes.com/education/medical",
    Domain: "Medical",
  },
]);
 
 const handleDeleteRow = (targetIndex) => {
   setRows(rows.filter((_,idx) => idx !== targetIndex))
 }
 const handleDeleteRow1 = (targetIndex) => {
  setYoutubeURL(rows.filter((_,idx) => idx !== targetIndex))
}
const handleDeleteRow2 = (targetIndex) => {
  setnewsFeedURL(rows.filter((_,idx) => idx !== targetIndex))
}
 
 const handleSubmit = (newRow) =>{
   rowToEdit === null ?
   setRows([...rows,newRow]):
   setRows(rows.map((currRow,idx) => {
     if(idx !== rowToEdit){
       return currRow;
     }
     else{
       return newRow;
     }
   }) )
 }

 const handleYoutubeUrlSubmit = (newRow) =>{
  rowToEdit1 === null ?
  setYoutubeURL([...youtubeURL,newRow]):
  setYoutubeURL(youtubeURL.map((currRow,idx) => {
    if(idx !== rowToEdit1){
      return currRow;
    }
    else{
      return newRow;
    }
  }) )
}

const handleNewsFeedUrl = (newRow) =>{
  rowToEdit2 === null ?
  setnewsFeedURL([...newsFeedURL,newRow]):
  setnewsFeedURL(newsFeedURL.map((currRow,idx) => {
    if(idx !== rowToEdit2){
      return currRow;
    }
    else{
      return newRow;
    }
  }) )
}
 
 const handleEditRow = (idx) =>{
   setRowToEdit(idx);
 
   setModalOpen(true);
 }
 const handleEditRow1 = (idx) =>{
  setRowToEdit1(idx);

  setModalOpen1(true);
}
const handleEditRow2 = (idx) =>{
  setRowToEdit2(idx);

  setModalOpen2(true);
}
  return (
  
    // ReactDOM.createPortal(
    
    <div className='App'>
    <header>
  <nav>
   <AdminNav></AdminNav>
  </nav>
</header>
     <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} tableHead={tableHead}></Table>
     <button className='btn' onClick={() => setModalOpen(true)}>Add</button>
     {modalOpen && ReactDOM.createPortal( <Modal closeModal={() => {
     setModalOpen(false); 
     setRowToEdit(null);
    }} 
     onSubmit={handleSubmit} defaultValue={rowToEdit !== null && rows[rowToEdit]} 
     tableHead={tableHead}/>, document.querySelector("#modal-root"))}
    
    <Table rows={youtubeURL} deleteRow={handleDeleteRow1} editRow={handleEditRow1} tableHead={tableHead2}></Table>
     <button className='btn' onClick={() => setModalOpen1(true)}>Add</button>
     {modalOpen1 && ReactDOM.createPortal( <Modal closeModal={() => {
     setModalOpen1(false); 
     setRowToEdit1(null);
     
    }} 
     onSubmit={handleYoutubeUrlSubmit} defaultValue={rowToEdit1 !== null && youtubeURL[rowToEdit1]}
     tableHead={tableHead2}/>, document.querySelector("#modal-root"))}

<Table rows={newsFeedURL} deleteRow={handleDeleteRow2} editRow={handleEditRow2} tableHead={tableHead3}></Table>
     <button className='btn' onClick={() => setModalOpen2(true)}>Add</button>
     {modalOpen2 && ReactDOM.createPortal( <Modal closeModal={() => {
     setModalOpen2(false); 
     setRowToEdit2(null);
    }} 
     onSubmit={handleNewsFeedUrl} defaultValue={rowToEdit2 !== null && newsFeedURL[rowToEdit2]}
      tableHead={tableHead3}/>, document.querySelector("#modal-root"))}
    </div> 
  //   ,document.querySelector("#modal"))
    
  );
}

export default AdminPage;
