import {Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Register from './Register';
import Login from './Login';
import Sample from './SampleLogin';
import Home from './home';
import Reset from './components/reset';
import Forget from './components/forgetpassword';
import Academy from './components/academyhome';
import Navbar1 from "./components/Navbar1";
import Footer from "./components/footer";
import OtpVerify from "./components/OtpVerify";
import Jobs from "./components/Jobs";

import Industryhome from "./components/industryhome";
import Industryjobpost from "./components/Industryjobpost";
import Activity from "./components/activitypage";
import Profile from "./components/profilepage";
import AdminPage from "./admin/Adminhome";
import AdminNav from "./admin/AdminNav";
import Chatbot from './chatbot/chatbot';
import Child from './child'
/*/*//**/ 

function App() {

  return (
    <div>
    <Routes>
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/samplelogin" element={< Sample/>}/>
    <Route path='/reset/:token/:id' element={<Reset/>} />
    <Route path='/forgotpassword' element={<Forget/>} />
    <Route path='/home' element={<Home/>} />
    <Route path='/' element={<Academy/>} />
    <Route path='/navbar' element={<Navbar1/>} />
    <Route path='/footer' element={<Footer/>} />
    <Route path='/otpverify' element={<OtpVerify/>}/>
    <Route path='/industry' element={<Industryhome/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/activitypage' element={<Activity/>}/>
    <Route path='/industrypost' element={<Industryjobpost/>}/>
    <Route path='/chatbot' element={<Chatbot/>}></Route>
    <Route path='/admin' element={<AdminPage/>}></Route>
    <Route path='/adminnav' element={<AdminNav/>}></Route>
    <Route path="/jobs" element={<Jobs />} />

  </Routes>
  <Child/>
  </div>
  );
}

export default App;