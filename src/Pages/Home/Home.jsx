import React from "react";
import Image1 from '../../Assets/img7.png'
import Image2 from '../../Assets/Group 3.png'
import Image3 from '../../Assets/Group 4.png'
import Image4 from '../../Assets/Group 5.png'
import icon1 from '../../Assets/image4.png'
import icon2 from '../../Assets/image3.png'
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <div className="home-container">
      <div className="home-page-container-1">
        <div className="top-container"> 
          <div className="top-heading">Learn with <span>Experts</span> Anytime 
             Anywhere</div>
          <div className="top-p">Are you ready to embark on a journey of knowledge and growth with a dedicated online private teacher? Look no further! <span className="upskill-span">UpskillMeet</span> is here to connect you with experienced and qualified educators who are passionate about helping you achieve your learning goals.</div>
          <div className="join-btn"><button className="j-btn">Join now</button></div>
        </div>
        <div className="top-image"><img className="top-image" src={Image1}/></div>
      </div>
      <div className="home-page-container-2">
        <div>
          <img className="img-2" src={Image2}/>
        </div>
        <div className="container-2-text">
          <div className="home-heading">Discover Experts</div>
          <div className="home-sub-h">Unlock your Chosen field.
           Connect with Gurus</div>
          <div className="cont-1-p">Linka is committed to empowering learners to achieve their goals. Discover the perfect Mentor who will inspire, guide, and support you every step of the way.</div>
          <div>
            <div className="cont-1-subh-1">Filter by Expertise:</div>
            <div className="cont-1-p"> Narrow down your search by selecting specific expertise, ensuring you find the perfect match for your learning goals.</div>
            <div className="cont-1-subh-1">View Mentor Profiles:</div>
            <div className="cont-1-p">  Dive into detailed profiles showcasing each teacher's qualifications, teaching     philosophy, and experience.</div>
          </div>
        </div>
      </div>
      <div className="home-page-container-3">
       <div className="cont-3-text" > <div className="home-heading">Book Sessions</div>
        <div>
          <div className="home-sub-h">Your path to 
            personalized guidance.</div>
          <div>
            <li className="cont-1-p">Schedule one-on-one sessions with your chosen mentor.</li>
            <li className="cont-1-p">Book sessions at times that work for you, ensuring a learning experience.</li>
            <li className="cont-1-p">Progress at your own pace, guided by mentors who understand your unique path.</li>
          </div>
          </div>
        </div>
        <div>
         <img className="img-3" src={Image3}/>
        </div>
      </div>
      <div className="home-page-container-4">
        <div><img className="img-4" src={Image4}/></div>
        <div className="container-4-text" >
          <div className="home-heading">Showcase your skills</div>
          <div className="home-sub-h">Share your Talents
          Get paid for your Time</div>
          <div className="cont-1-p">Set up a personalized profile showcasing your talents, experience, and the services you offer. Add multimedia content such as videos, images, or samples to highlight your skills</div>
        </div>
      </div>
      <div className='p-branding-container-4'>
        <img className='telegram-icon' src={icon1}/>
            <div className='container-4-flex'>
              <div className='p-branding-page-container-heading-1'>Connect with us on social media </div>
              <div><img className='read-icon' src={icon2}/></div>
            </div>
          </div>
      <div>  
      </div>
    </div>
  );
};

export default Home;
