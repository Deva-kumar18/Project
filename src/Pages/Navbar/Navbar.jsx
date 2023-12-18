import React from 'react'
import Linka from '../../Assets/Linka.png'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate= useNavigate()
    const navHome=()=>{
        navigate("/home")
    }
    const navProfBranding=()=>{
      navigate("/professionalbranding")
  }
  return (
    <div className='navbar-container'>
        <div className='nav1'><img className='linka-ico' src ={Linka} /></div>
        <div className='nav2'><div ><div></div><p onClick={navHome}>Home</p></div><div><p className='p-br-p' onClick={navProfBranding}>Professional branding</p></div></div>
        <div className='nav3'><div>Login</div><div><button className='singup-btn'>Singup</button></div></div>
    </div>
  )
}

export default Navbar