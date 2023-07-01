import React from 'react'
import Link from 'next/link'
import './style.css'


const Header = ({titleHome, titleAbout, titleWhatido, titleSkills, titleExperience, titleProjects, titlePortfolio, titleContact, titleResume}) => {
  return (
  <>
    <div class="navbar">
      <div class="container">
        <div class="logo">Ahsan</div>
        <ul class="nav">
        <li>
            <Link href='#home'>{titleHome}</Link>
          </li>
          <li>
            <Link href='#about'>{titleAbout}</Link>

          </li>
          <li>
            <Link href='#whatido'>{titleWhatido}</Link>
          </li>
          <li>
            <Link href='#skills'>{titleSkills}</Link>
          </li>
          <li>
            <Link href='#experience'>{titleExperience}</Link>
          </li>
          <li>
            <Link href='#projects'>{titleProjects}</Link>

          </li>
          <li>
            <Link href='#portfolio'>{titlePortfolio}</Link>
          </li>
          <li>
            <Link href='#contact'>{titleContact}</Link>
          </li>
          <li>
            <Link href='https://drive.google.com/file/d/1T-IkV1dfUAKzeKuehyy5zC_OJGZpBQ_0/view?usp=sharing' target='_blank'>{titleResume}</Link>
          </li>
        </ul>
      </div>
    </div>
   
                             {/* Hero Section  */}
  
  
  
    <div>

    </div>


</>

)}

export default Header