import { useState } from "react";
import axios from 'axios';

function ForgotPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const token = window.localStorage.getItem('token');
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    else{
      axios.post('https://iai-v1.onrender.com/updatepass',{
        password:password,
        token:token
      }).then((res)=>{
        console.log(res.data);
        if(res.data.message==='updated'){
          alert('updated succesfully');
          window.localStorage.clear('token');
          window.location.href='https://iai-version-1-aravindh0799.vercel.app/samplelogin';
        }
      })
    }

    // TODO: Submit password update request to server
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
          <label>
            Password:
            <input type="password" id="password" value={password} onChange={(event)=>{setPassword(event.target.value)}}/>
          </label>
          <label>
            Confirm Password:
          <input type="password" id="ConfirmPassword" value={confirmPassword} onChange={(event)=>{setConfirmPassword(event.target.value)}}/>
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ForgotPasswordPage;
