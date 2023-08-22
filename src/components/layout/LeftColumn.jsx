import React from "react";
import NoteOutline from '../../components/note/NoteOutline'
import backimg from '../../assets/pexels-mart-production-7718838.jpg'

function LeftColumn() {
  return (
    
    <div className=" flex  bg-gray-400/80 min-h-[45%] w-full  items-center mr-10">
       <img src={backimg} className='absolute   w-full h-full  object-cover mix-blend-overlay' alt="backgroundIMG" />

          <NoteOutline/>
      
     
      
    </div>
  );
}

export default LeftColumn;
