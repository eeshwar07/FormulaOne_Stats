import React from 'react'
import '../Header/Header.css'
import logo from '../../Assets/Images/logo.jpg'

export default function Header() {
  return (
     <header className="header">
        <div><img src={logo} alt="F1 logo"/></div>
        <div className='text' >
        <h1>Formula One</h1>
        </div>
    </header>
  )
}
