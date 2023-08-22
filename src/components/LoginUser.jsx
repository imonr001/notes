import React from "react";
import supabase from "../supabaseClient";
import { useNavigate } from "react-router-dom";


function LoginUser(props) {
  const navigate = useNavigate();

  // const loginHandler = async () => {
  
  async function loginHandler() {
    try {
      const response = await supabase.auth.signInWithPassword({
        email: props.email,
        password: props.password,
      });
      if (response.error) throw response.error;
      // const nav = await response.data 
      //   console.log(nav)
          navigate('/')   
      
      //navigate('/')
    } catch (error) {
      console.log("error here", error);
    }
      
  };
  
  return (
    <div className="m-6">
    <button
      className=" bg-blue-700 text-white border w-full py-2  hover:bg-blue-400 relative"
      type="button"
      onClick={loginHandler}>
      Sign In
    </button>
    <div>
      <p className="hover:underline py-3 mt-3 font-semibold relative text-center cursor-pointer ">
        Not a member? Sign up now
      </p>
    </div>
  </div>

  );
}

export default LoginUser;
