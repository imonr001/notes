import React from 'react'
import supabase from '../supabaseClient';
import { useState } from 'react';
function Search(props) {

  const [data, setdata] = useState('');


  

    console.log(props.searchText)
    async function searchNoteHandler() {
        try {
          const res = await supabase
            .from("entries")
            .select('title')
            .eq('title',props.searchText)
              // console.log(props.searchText)
          // console.log(res.data)
         setdata(res.data)
          if (res.data.length === [].length) {
            alert("No Title was found ")
          }
        } catch (error) {
          console.log("error", error);
        }
    }
  
  console.log(data)



  return (
      <div>
      <div  >
       
       
        <h1 onChange={searchNoteHandler} > {data} </h1>
        {/* <button onClick={searchNoteHandler}>press</button> */}
        
             
          </div>
    </div>
  )
}

export default Search