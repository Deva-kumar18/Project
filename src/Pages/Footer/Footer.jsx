import { TwitterOutlined,FacebookOutlined,InstagramOutlined } from '@ant-design/icons'
import React from 'react'
import Twitter from '../../Assets/logo-x.png'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='foot-container'>
      <div className='foot-1'>
        <div className='l-title'>L</div>
        <div className='l-content'><div className='l-title-2'>Linka</div>
        <div className='l-title-3'>caption here</div></div>
        <div className='icon-container'>
          <div className='ico-headings'>Follow us on</div>
          <div className='ico-flex'>
          <div className='social-ico'><img className='x-icon' src={Twitter}/></div>
          <div className='social-ico'><FacebookOutlined /></div>
          <div className='social-ico'><InstagramOutlined/></div>
          
          </div>
        </div>
      </div>
      <div className='foot-2'><div className='f-h-1'>Pages</div>
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
         <hr />
         <div className='copyright'>
          <div>Linka Private Limited.<span>&copy;</span>Copyright All Rights Reserved.</div>
         </div>
    </div>
  )
}

export default Footer