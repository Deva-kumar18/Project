import { FacebookOutlined,InstagramOutlined } from '@ant-design/icons'
import React from 'react'
import Twitter from '../../Assets/xicon.png'
import logo from '../../Assets/Upskill-white.png'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='foot-container'>
      <div className='foot-1'>
       <img className='upskill-logo' src={logo}/>
        <div className='icon-container'>
          <div className='ico-headings'>Follow us on</div>
          <div className='ico-flex'>
          <div className='social-ico'><img className='x-icon' src={Twitter}/></div>
          <div className='social-ico'><FacebookOutlined /></div>
          <div className='social-ico'><InstagramOutlined/></div>
          </div>
        </div>
      </div>
      <div className='pages-link'><div className='foot-2'><div className='f-h-1'>Pages</div>
      <div>Home</div>
      <div>About us</div>
      <div>Contact Us</div></div>
      <div className='foot-3'>
        <div className='f-h-1'>Contact US</div>
        <div>Help</div>
        <div>Terms & conditions</div>
        <div>Privacy & Policy</div>
      </div>
      </div>
      </div>
         <hr />
         <div className='copyright'>
          <div>Linka Private Limited.<span className='copyright-icon'>&copy;</span>Copyright All Rights Reserved.</div>
         </div>
    </div>
  )
}

export default Footer