import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../src/app/header/page'
import HomePage from '../src/app/homePage/page'
import About from '../src/app/about/page'
import Skills from '../src/app/skills/page'
import Experience from '../src/app/experience/page'
import Projects from '../src/app/projects/page'
import Services from '../src/app/services/page'
import Portfolio from '../src/app/portfolio/page'
import Contact from '../src/app/contact/page'
import Whatido from '../src/app/whatido/page'
// import Button from 'react-bootstrap/Button';


export default function Home() {
  return (
    <div className='mainProjectContainer'>
    {/* Header  */}

    <Header titleHome='Home' titleAbout='About' titleWhatido='What I do?' titleSkills='Skills' titleExperience='Experience' titleProjects='Projects' titlePortfolio='Portfolio' titleContact='Contact' titleResume='Resume'/>

    
    {/* Home Page */}

    <HomePage mainTitleHomePage={'Ahsan Hafeez'} ProfileTitle={'Software Engineer'} ProfileDescription={'A passionate Full Stack Software Developer 🚀 having a special interest in Frontend technologies and experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.'} />
    {/* <Button variant="success">Success</Button>{' '} */}


  {/* About us  */}


    <About mainTitleAbout='About us' />


  {/* What I do  */}

  <Whatido mainTitleWhat='What I do?' />


   {/* Skills  */}


  <Skills mainTitleSkill='Skills' />


  {/* Experience  */}


<Experience mainTitleExperience='Experience' />


   
   {/* Projects  */}


<Projects mainTitleProject='Projects' />


    {/* Portfolio  */}


<Portfolio mainTitlePortfolio='Portfolio' />


    {/* Contact  */}


<Contact mainTitleContact='Contact' />
 
    </div>
  )
}
