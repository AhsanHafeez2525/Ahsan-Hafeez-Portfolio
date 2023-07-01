import React from 'react'
import './style.css'

const HomePage = ({mainTitleHomePage, ProfileTitle, ProfileDescription}) => {
  return (
    <div className='main-HomePage-Container'>

    <div>
    <div>
    <h1>{mainTitleHomePage}</h1>
    <h2>{ProfileTitle}</h2>
    <h3>{ProfileDescription}</h3>
</div>


    </div>

    
    
    </div>
  )
}

export default HomePage