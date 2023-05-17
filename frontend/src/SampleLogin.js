import React, { useState, useEffect } from "react";
import "./Samplelogin.css"; // import your CSS file here
import Axios from 'axios';
import Image from './assets/signup_image_1.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
// toast.configure(

// );
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false); 
  const [emailFocus, setEmailFocus] = useState(false);
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  useEffect(() => {
  }, [name]);


  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
}, [email])

useEffect(() => {
    setValidPwd(PWD_REGEX.test(password));
}, [password])

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    console.log(email)
    const v2 = PWD_REGEX.test(password);
    const v3 = EMAIL_REGEX.test(email);
    if (!v2 || !v3) {
      setErrMsg("Invalid Entry");
      return;
  }
    try {
        window.localStorage.setItem("userMail",email);
        
        Axios({
            
            method:"post",
            url:"http://localhost:6080/login",
            data:{
                email:email,
                password:password
            }
        }).then((res)=>{
            
            if(res.data.message==="academy"){
                Axios({
                    method:"post",
                    url:"http://localhost:6080/login_academy",
                    data:{
                        email:email,
                        password:password
                    }
                }).then((res)=>{
                    console.log('res', res.data.status);
                    if(res.data.status==="success for academy"){
                      console.log('hi')
                      localStorage.setItem("userName",res.data.name)
                      toast.success("Login Successful")
                      window.location.href="home";
                    }
                    else{
                      toast.error('Enter correct credentials')
                      console.log('error')
                    }

                    window.localStorage.setItem("token", res);
                    window.localStorage.setItem('is logged in', "true");
                    window.localStorage.setItem("affiliation","academy")
                })
            }
            else if(res.data.message=='industry'){
              Axios({
                method:"post",
                url:"http://localhost:6080/login_industry",
                data:{
                    email:email,
                    password:password
                }
            }).then((res)=>{
                console.log('res', res.data.status);
                if(res.data.status==="success for industry"){
                  console.log('hi')
                  localStorage.setItem("userName",res.data.name)
                  toast.success("Login Successful")
                  window.location.href="industry";
                }
                else{
                  toast.error("Enter correct credentials");
                  console.log('error')
                }

                window.localStorage.setItem("token", res);
                window.localStorage.setItem('is logged in', "true");
                window.localStorage.setItem("affiliation","industry")
            })
            }
            else{
               alert('user not registered');
            }
        })
    }
    catch(err) {
      console.log('error occured', err);
    };
  };

  return (
    <div className="split-page">
      <ToastContainer />
      <div className="left-section">
        <h1>LOGO</h1>
        <div className="left-main">
          {/* <p>LOGIN HERE !!</p> */}
          <img src={Image} alt="login_image" />
        </div>
      </div>
      <div className="login-right-section">
        <div className="login-right-fields">
        <h2>LOGIN</h2>
        <form onSubmit={handleSubmit}>
          {/* <label>
            Name:
            <input type="text" name="name" value={name} onChange={handleNameChange} />
          </label> */}
          <label>
            Email:
            <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
            <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
            <input type="email" 
            name="email" 
            value={email} 
            onChange={handleEmailChange}
            aria-invalid={validEmail ? "false" : "true"}
            aria-describedby="uidnote" 
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            />
          </label>
          <p id="uidnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            '@' symbol missing.<br />
                            Enter a valid Email address.<br />
                        </p>
          <label>
            Password:
            <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
            <FontAwesomeIcon icon={faTimes} className={validPwd || !password ? "hide" : "invalid"} />
            <input type="password" 
            name="password" 
            value={password}
            required
            aria-invalid={validPwd ? "false" : "true"}
            aria-describedby="pwdnote"
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)} 
            onChange={handlePasswordChange}/>
          </label>
          <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>
          <br/>
          <div class="links">
          <p>
            <a href="register">To Register</a>
                    
          </p>
          <p>
            <a href="forgotpassword">Forgot password?</a>
          </p>
          </div>
          <button class="submit-button" type="submit" >Submit</button>
        </form>
      </div>
      </div>
    </div>
  );
}

export default Login;