import React from "react";
import supabase from "../supabaseClient";
import { useNavigate } from 'react-router-dom'


function SignupUser(props) {

  const navigate = useNavigate();
  async function signUpHandler() {
    try {
      const response = await supabase.auth.signUp({
        email: props.email,
        password: props.password,
      });
      if (response.error) throw response.error;
      navigate('/')

    } catch (error) {
      console.log("error here", error);
    }
  };

  return (
    <div className="m-6">
      <button className=" bg-blue-700 text-white border w-full py-2  hover:bg-blue-400 relative"
        type="button"
        onClick={signUpHandler}>
        Sign up
      </button>
    </div>
  );
}

export default SignupUser;
