import React from 'react'
import Menu from './Menu';


const Sidebar = ({open,setOpen}) => {
    console.log(open);
  return (
    <div className={`fixed  z-50 w-1/2 mx-0 mt-0 pt-10 h-screen bg-black ${open?"":"hidden"}`} onClick={()=>setOpen(prev=>!prev)}>

         <Menu side='flex-col'/>
    </div>
  )
}

export default Sidebar
