import React from 'react'
import { useNavigate } from 'react-router-dom'



const Header = () => {
    const navigate =useNavigate();
  return (
    <div style={{display:"flex",justifyContent:"space-between",backgroundColor:"#5c5239",padding:"10px"}}>
    <div style={{fontSize:10}}>
      <h1>Task Management </h1>
    </div>

    <div>
        <button style={{cursor:"pointer"}} onClick={()=>{
            navigate ("/")

        }}>Home</button>
        {" "}
        <button style={{cursor:"pointer"}} onClick={()=>{
            navigate("/add")
        }}>Add User</button>
            {" "}
        <button style={{cursor:"pointer"}} onClick={()=>{
            navigate("/About")
        }}>About</button>
    </div>
    </div>
  )
}

export default Header
