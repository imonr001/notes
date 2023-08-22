import React from "react";
import { useEffect, useState } from "react";
import supabase from "../supabaseClient";
import { useNavigate } from "react-router-dom";
function Authentication(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userId, setUserId] = useState("");
    const navigate = useNavigate();


    useEffect(() => {
        
        const getUser = async () => {
            console.log(isAuthenticated)
            console.log(userId)
            const user = await supabase.auth.getUser();
            console.log('user', user);
            if (user.data.user !== null) {
                const userId = user.data.user?.id;
                setIsAuthenticated(true);
                setUserId(userId);
            } else {
                navigate('/login')
            }
        };
        getUser();

    },[])


    return <></>;
}

export default Authentication;
