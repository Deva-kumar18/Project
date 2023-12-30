import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Media from 'react-media';

const Navbar = () => {
    const navigate= useNavigate()
    const [isToggled,setIsToggled] = useState(false);
    const navHome=()=>{
        navigate("/home")
    }
    const navProfBranding=()=>{
      navigate("/professionalbranding")
  }

  return (
    <>
    <Media query={{ maxWidth: 599 }}>
          {matches =>
            matches ? (
              <>
             <div className='navbar-container-small'>
                  <div className='navbar-wrapper-small'>
                  <div className='navbar-icon'><h1 className='linka-icon'>Linka</h1></div> 
                  <div className='navbar-btn'><h1 className='linka-ico' 
                  onClick={()=> setIsToggled(isToggled === false ? true : false)}>Button</h1></div>
                  </div>
                  {isToggled &&
                  <div className='nav-items-small'>
                   <div className='nav-item'>
                   <p className='nav-page' onClick={()=>{navHome();setIsToggled(isToggled === false ? true : false)}}>Home</p>
                   <p className='nav-page' onClick={()=>{navProfBranding();setIsToggled(isToggled === false ? true : false)}}>Professional branding</p>
                   <div>Login</div><div><button className='singup-btn-small'>Singup</button></div></div>
                   </div>
                }
             </div>
              {/* <div className='navbar-container'>
              <div className='nav1'><h1 className='linka-ico'>Linka</h1></div>
              <div className='nav2'><div ><div></div><p className='p-br-p' onClick={navHome}>Home</p></div><div><p className='p-br-p' onClick={navProfBranding}>Professional branding</p></div></div>
              <div className='nav3'><div>Login</div><div><button className='singup-btn'>Singup</button></div></div> */}
          {/* </div> */}
          </>
            ) : (
              <div className='navbar-container'>
        <div className='nav1'><h1 className='linka-ico'>Linka</h1></div>
        <div className='nav2'><div ><div></div><p className='p-br-p' onClick={navHome}>Home</p></div><div><p className='p-br-p' onClick={navProfBranding}>Professional branding</p></div></div>
        <div className='nav3'><div>Login</div><div><button className='singup-btn'>Singup</button></div></div>
    </div>
            )
          }
        </Media>
  </>
  )
}

export default Navbar