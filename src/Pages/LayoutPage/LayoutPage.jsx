import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Content from '../Content/Content'

const LayoutPage = () => {
  return (
    <div className='layout-container'>
        <Navbar/>
        <Content/>
        <Footer/>
    </div>
  )
}

export default LayoutPage