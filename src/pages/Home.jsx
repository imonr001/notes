import React from 'react'
import Authentication from '../components/Authentication'
import Header from '../components/layout/Header'
import SideNav from '../components/layout/SideNav'
import LeftColumn from '../components/layout/LeftColumn'
import RightColumn from '../components/layout/RightColumn'
import Main from '../components/layout/Main'
import NoteOutline from '../components/note/NoteOutline'
function Home() {





  return (
    
    
    <div className=" bg-gray-100">
      <Authentication/>
      <SideNav />
      <div  > 
        {/* <Header /> */}
        {/* <LeftColumn /> */}
        {/* <RightColumn/> */}
       
        <Main />
        <NoteOutline/>
    </div>
    </div>
  )
}

export default Home