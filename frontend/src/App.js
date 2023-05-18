import {Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Register from './Register';
import Login from './Login';
import Sample from './SampleLogin';
import Home from './home';
import Academy from './components/academyhome';
import Industry from "./components/industryhome";
import Reset from './components/reset';
import Forget from './components/forgetpassword';
import Navbar1 from "./components/Navbar1";
import Footer from "./components/footer";
import OtpVerify from "./components/OtpVerify";
import Jobs from "./components/Jobs";

import Industryjobpost from "./components/Industryjobpost";
import Activity from "./components/activitypage";
import Profile from "./components/profilepage";
import AdminPage from "./admin/Adminhome";
import AdminNav from "./admin/AdminNav";
import Chatbot from './chatbot/chatbot';
import Child from './child'
import ModalForm from "./components/ProfileModal";
import NewProfile from "./components/NewProfile";
import MainProfile from "./components/EditProfile";
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
    <Route path='/' element={<Home/>} />
    <Route path='/academy' element={<Academy/>} />
    <Route path='/industry' element={<Industry/>}/>
    <Route path='/navbar' element={<Navbar1/>} />
    <Route path='/footer' element={<Footer/>} />
    <Route path='/otpverify' element={<OtpVerify/>}/>
    <Route path='/profile' element={<MainProfile/>}/>
    <Route path='/activitypage' element={<Activity/>}/>
    <Route path='/industrypost' element={<Industryjobpost/>}/>
    <Route path='/chatbot' element={<Chatbot/>}></Route>
    <Route path='/admin' element={<AdminPage/>}></Route>
    <Route path='/adminnav' element={<AdminNav/>}></Route>
    <Route path="/jobs" element={<Jobs />} />
    <Route path="/newprofile" element={<NewProfile />} />
  </Routes>
  <Child/>
  </div>
  );
}

export default App;