import React, {useState } from "react";
import { AiOutlineClose ,AiOutlineMenu} from "react-icons/ai";
import { PiFilePlusLight, PiListPlusLight } from 'react-icons/pi'
import{GoSearch} from 'react-icons/go'
import Search from "../Search";
import SearchAll from "../SearchAll";
function SideNav() {

  const [nav, setNav] = useState(false);
  const [searchText, setSearchText] = useState('');


  function handleSearchNote(e) {
    setSearchText(e.target.value) 
    console.log(searchText)
  }

  return (
    <div className="h-6 "> 

      <div> <AiOutlineMenu size={35} className=' fixed sm:mx-6 sm:h-28 cursor-pointer 'onClick={()=>setNav(!nav)}/> 
  

      <div className={ nav ?"fixed top-0 left-0 w-[300px] h-screen bg-gray-300 z-10 duration-300" : " fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
        <AiOutlineClose
          size={30}
          className=" absolute right-5 top-4 cursor-pointer"
          onClick={()=>setNav(!nav)}
        />
        <h2 className="text-3xl p-3  text-center font-bold bg-gray-300   " >Scribble</h2>
        <hr className="w-full  bg-gray-700 border-0"></hr>
        <nav>
          <ul className=" flex flex-col p-2 mb-2 text-white bg-gray-600">
            <li className=" text-md p-2  flex bg-white mb-2  rounded-full cursor-pointer text-black "> <GoSearch size={25} className=" mr-6  " />
                <input className=" focus:outline-none " placeholder="Search by Title" onChange={handleSearchNote}  ></input>
                
            </li>
            {/* <li className=" text-xl p-4  flex bg-blue-500 mb-2 rounded-lg cursor-pointer "> <PiFilePlusLight size={30} className=" mr-6  "/> New Enrty</li>
              <li className=" text-xl p-4 flex bg-gray-400  mb-2  rounded-lg cursor-pointer"> <PiListPlusLight size={30} className=" mr-6 " /> <Search onClick={handleSearchNote} />  View All Entries</li> */}
               <li><SearchAll search={searchText } />  </li>
          </ul>
        </nav>
      </div>
      </div>
      </div>
  );
}

export default SideNav;
