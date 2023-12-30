import React from 'react'
import Image10 from '../../Assets/img10.png'
import Image1 from '../../Assets/image1.png'
import Image2 from '../../Assets/image2.png'
import Image3 from '../../Assets/image3.png'
import Image4 from '../../Assets/image4.png'
import Image9 from '../../Assets/img9.png'
import Icon1 from '../../Assets/icon-1.png'
import Icon2 from '../../Assets/icon-2.png'
import Icon3 from '../../Assets/icon-3.png'

const ProfessionalBranding = () => {
  return (
    <div className='professional-container'>
        <div className='p-container'><div className='p1-div'>
        <div className='header-for-p-branding'><div className='p-branding-top'>Professsionl Branding</div>
        <div className='p-branding-top2'>Professional Branding goes beyond a resume. it's a strategic approach to managing and marketing your unique identity.</div></div>
        <div ><img className='brand-image' src={Image10}/>
        <div><img className='back-image-trasparant' src={Image9}/></div>
        </div>
        </div>
        <div className='p-branding-page-container-1'>
          <div className='p-branding-page-container-1-1'>
            <div><img className='icon-1' src={Icon3}/></div>
            <div className='p-branding-container-heading-1'>Building Your Brand</div>
            <div className='p-branding-page-container-p'>Continuously enhance your skills and stay updated with industry trends. Showcase your growth and expertise.</div>
          </div>
          <div className='p-branding-page-container-1-2'>
            <div><img className='icon-2' src={Icon2}/></div>
            <div className='p-branding-container-heading-1'>Be a Brand Ambassador</div>
            <div className='p-branding-page-container-p'>Every interaction is an opportunity to reinforce your brand. Consistently exhibit professionalism, integrity, and expertise.</div>
          </div>
          <div className='p-branding-page-container-1-3'>
            <div><img className='icon-3' src={Icon1}/></div>
            <div className='p-branding-container-heading-1'>Target Audience</div>
            <div className='p-branding-page-container-p'>Identify your target audience – the professionals, companies, or communities you want to connect with. Tailor your brand to resonate with their needs and expectations.</div>
          </div>
        </div>
          <div className='p-branding-page-container-2'>
            <div><img className='p-branding-page-container-2-img' src={Image1}/></div>
            <div className='p-branding-page-container-2-text-align'><div className='p-branding-page-container-heading'>Professional Branding </div>
            <div className='p-branding-page-container-p'>Present yourself consistently across various platforms – resume, LinkedIn, business cards, etc. Ensure a cohesive visual and messaging strategy.Clearly define what sets you apart. Highlight your unique skills, experiences, and qualities that make you valuable in your professional field.</div>
            <div className='p-branding-page-container-p'>Leverage social media and professional networks to build a strong online presence. Regularly update profiles with achievements, projects, and endorsements.A strong professional brand enhances your visibility and credibility, leading to better career opportunities and advancement.</div>
            <div className='p-branding-page-container-p'>It facilitates effective networking, making it easier for others to understand your strengths and connect with you.Design business cards, email signatures, and other branding tools that reflect your personal brand. Make sure they align with your visual identity and messaging.</div>
            <div className='p-branding-page-container-p-li'>
              <div><li className='p-branding-li' >Consistent Image</li>
              <li className='p-branding-li'>Unique Value Proposition (UVP)</li>
              <li className='p-branding-li'>Online Presence</li></div>
             <div> <li className='p-branding-li'>Consistent Branding</li>
              <li className='p-branding-li'>Career Advancement</li></div>
            </div>
            </div>
        </div>
        <div className='p-branding-page-container-3'>
          <div>
            <div className='p-branding-page-container-heading'>Build your brand </div>
            <div className='p-branding-page-container-p'> Reflect on your values, strengths, and passions. Understand what sets you apart and what you want to be known for in your professional life.</div>
            <div>
              <div className='p-branding-container-3-sub-h'>Define Your Mission and Goals</div>
              <li className='p-branding-page-container-p'>Craft a clear and concise mission statement for your career. Identify your long-term goals and the impact you want to make in your field.</li>
            </div>
            <div>
              <div className='p-branding-container-3-sub-h'>Identify Your Target Audience</div>
              <li className='p-branding-page-container-p'>Determine the audience you want to reach—colleagues, potential employers, clients, etc. Tailor your brand to resonate with their needs and expectations.</li>
            </div>
          </div>
          <div><img className='image-2' src={Image2}/></div>
        </div>
        <div className='p-branding-container-4'>
        <img className='telegram-icon' src={Image4}/>
            <div className='container-4-flex'>
              
              <div className='p-branding-page-container-heading-1'>Connect with us on social media </div>
              <div><img className='read-icon' src={Image3}/></div>
            </div>
          </div>
    </div>
    </div>
  )
}

export default ProfessionalBranding