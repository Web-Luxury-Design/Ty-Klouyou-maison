import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  const [isSun , setIsSun]=useState(true)
  return (
    <div className="footer-container" id='footer'>
      <div className='footer' style={{backgroundColor: isSun ? "white" : "black"}}>
      <div className="sun-night" onClick={()=>setIsSun(!isSun)}>
      <img src={isSun ? "./assets/img/soleil.svg" : "./assets/img/icons8-symbole-de-la-lune-60.png"} alt="sun-moon-tyKlouyou"  style={{ filter: isSun ? "invert(100%)" : ""}}/>
      </div>
      <div className="logo-container" style={{color: isSun ? "black" : "white" , boxShadow:isSun ? "inset 0 0 10px rgba(0, 0, 0, 0.151)" : " 0 0 15px rgba(255, 255, 255, 0.25)"}}>
      <h3>Designed by <a href="#" style={{color: isSun ? "black" : "white"}}>GGREGERB</a></h3>
      <p>création de site web design</p>
      <a href="#" style={{color: isSun ? "black" : "white"}}>en savoir plus</a>
      </div>
      <div className="link-container">
        
        <ul className="legal" style={{color: isSun ? "black" : "white"}} >
          <li>Règlement Intérieur</li>
          <li>Mentions légales</li>
          <li>© WebLuxury Design 2024</li>
        </ul>
        <ul className="pages">
          <NavLink to="/" style={{color: isSun ? "black" : "white"}} onClick={()=>window.scrollY(0)}>
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/photos" style={{color: isSun ? "black" : "white"}} onClick={()=>window.scrollY(0)}>
            <li>Photos</li>
          </NavLink>
          <NavLink to="/activity" style={{color: isSun ? "black" : "white"}} onClick={()=>window.scrollY(0)}>
            <li>Activités</li>
          </NavLink>
          <NavLink to="/contact" style={{color: isSun ? "black" : "white"}} onClick={()=>window.scrollY(0)}>
            <li>Contact</li>
          </NavLink>
        </ul>
        <div className="btn">
        <button>
          Contactez Ty Klouyou
        </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer
