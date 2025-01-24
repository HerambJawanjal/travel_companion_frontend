import React, { useState } from "react";

import { handleLogin } from "../services/auth_api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email,setEmail] =useState("");
  const [password,setPassword] =useState("");
  const [isLogin,setIsLogin]=useState(false)
  const navigate=useNavigate();


  const submitHandler=async (e)=>{
    console.log(email ,"inside submithandle")
    e.preventDefault();
    const loginData=await handleLogin(email,password)
     setIsLogin(loginData);

  }

  if(isLogin){
    navigate(`/`)
  }

  console.log(isLogin);

  return (
    <form onSubmit={(e)=>{submitHandler(e)}} style={{ display: "flex", flexDirection: "column", width: "300px", margin: "0 auto", marginTop: "20vh" }}>
      <input onChange={(e)=>{setEmail(e.target.value)}}
        type="email"
        placeholder="Email"
        style={{ marginBottom: "10px", padding: "8px", boxSizing: "border-box" }}
      />
      <input onChange={(e)=>{setPassword(e.target.value)}}
        type="password"
        placeholder="Password"
        style={{ marginBottom: "10px", padding: "8px", boxSizing: "border-box" }}
      />
      <button type="submit" style={{ padding: "8px" }}>Login</button>
    </form>
  );
};

export default Login;
