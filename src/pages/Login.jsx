import React from 'react'
import loginIMG from '../assets/loginPageBackground.jpg'
import { useState } from 'react';
import LoginUser from '../components/LoginUser';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="relative w-full h-screen bg-gray-700/90 ">
    <img
      className=" absolute w-full h-full object-cover mix-blend-overlay"
      src={loginIMG}
      alt="stock img"
    />
    <div className="flex  justify-center flex-col  items-center h-full">
      <form className="bg-gray-300 max-w-[500px] mx-auto w-full rounded-xl ">
        <h2 className=" text-center  text-6xl font-bold pt-5">Scribble</h2>
        <div className="flex flex-col py-2 m-6  font-medium relative">
          <label>Email</label><label> Test Email : test@test.com <br />Password : 1234567</label>
          <input
            className="border py-2"
            type="email"
            placeholder="Email@example.com"
          onChange={(e)=>{setEmail(e.target.value)}}
          />
        </div>
        <div className="flex flex-col py-2 font-medium m-6 relative">
          <label>Password</label>
          <input
            className=" flex flex-col py-2 "
            type="password"
            onChange={(e)=>{setPassword(e.target.value)}}
          />
          </div>
          <div>
            <LoginUser email={email} password={password}  />
          </div>
        {/* <div className="m-6">
          <button
            className=" bg-blue-700 text-white border w-full py-2  hover:bg-blue-400 relative"
           
          >
            Sign In
          </button>
          <div>
            <p className="hover:underline py-3 mt-3 font-semibold relative text-center cursor-pointer ">
              Not a member? Sign up now
            </p>
          </div>
        </div> */}
      </form>
    </div>
  </div>
  )
}

export default Login