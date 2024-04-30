import React, { useEffect } from 'react'
import './About.css'
import ApexLogo from '../../assets/ApexDevs_Logo_Temp.png'
import ContactCard from '../About/ContactCard.jsx'

function About() {

  return (
    <>
    <div className='super-about-container'>
    <div className='about-container'>

      {/* LOGO */}
      <div className='about-logo'>
        <div className='about-logo-img'>
          <img src={ApexLogo}></img>
        </div>
        <div className='about-logo-text'>
          <div className='about-logo-text-apex'>APEX</div>
          <div className='about-logo-text-devs'>DEVS</div>
        </div>
      </div>

      {/* SLOGAN */}
      <div className='slogan text'>
        For Developers By Developers
      </div>

      {/* lINE bREAK */}
      <div className='breakline'></div>

      {/* ABOUT */}
      <div className='about-text text'>
      ApexDevs is a community, which makes it easy for developers to reach out other develops and can get help from each other by understaning their projects in an easy way out by looking at images and with compact description. Devs can test out projects from their repos and review on it and can also give suggestion.
      </div>

      {/* lINE bREAK */}
      <div className='breakline'></div>

      {/* CONTACT */}
      <div className='about-contact'>
        <ContactCard/>
      </div>

    </div>
    </div>
    </>
  )
}

export default About