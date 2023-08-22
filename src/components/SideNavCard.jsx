import React from "react";

function SideNavCard({ result }) {

    

  return (
    <div>
          <ul className=" text-xl p-4  bg-gray-400  mb-2  rounded-lg font-bold ">Search Results:    
        {/* <li> Title: {result.title}</li> */}
        <li> Date: {result.date}</li>
              <li> Body: {result.body}</li>
              
          </ul>
          {/* <button className=" text-xl p-3   mx-44 flex bg-red-600  mb-2  rounded-lg font-bold " onClick={}  > Delete?</button> */}
    </div>
  );
}

export default SideNavCard;
