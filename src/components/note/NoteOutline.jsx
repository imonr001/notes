import React from "react";
import { useState } from "react";
import AppNote from '../note/AddNote'
function Note() {



  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return  `${month}/${date}/${year}`;
  }

  const [currentDate, setCurrentDate] = useState(getDate());
  const [noteText, setNoteText] = useState('');
  const [noteTitle, setNoteTitle] = useState('');

  function handleText(e){
    setNoteText(e.target.value)
  }
  function handleTitle(e){
    setNoteTitle(e.target.value)
  }

  return (
    <div >
      <div className=" max-w-[600px] md:max-w-[900px] mx-auto relative  ">
        <div className="flex border-4 rounded-xl border-black  bg-gray-100">
          <h1 className="text-bold text-4xl p-6 flex">Title <span className="indent-2" >:</span></h1>
          <input
            placeholder="Enter Title Here"
            className="  text-3xl h-14 pt-4 mt-3 pl-1 w-full rounded-md bg-transparent focus:outline-none  "
            onChange={handleTitle}
          />
          <p className=" text-3xl p-6 ">{currentDate}</p>
        </div>
        <div className=" flex flex-col ">
          <textarea
            placeholder="Enter Text here"
            className="h-[420px] w-full  bg-gray-100 resize-none  border-black rounded-xl border-4  text-3xl  text-left p-3  text-black "
            onChange={handleText}
          />
          <AppNote noteText={noteText} currentDate={currentDate} noteTitle={noteTitle } />
        </div>
      </div>
    </div>
  );
}

export default Note;
