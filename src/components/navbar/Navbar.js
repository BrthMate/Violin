import React, {useState} from 'react';

import './navbar.css';

const Navbar = () => {

  const [navbar,setNavbar] = useState(false);
  const [menu,setMenu] = useState(false);

  const scrollfunc = () => {
    if(window.scrollY > 0){
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  }

  const Menufunc = () => {
    if(menu){
      setMenu(false)
    }else{
      setMenu(true)
    }
  }

  document.addEventListener('scroll', scrollfunc);

  return (
    <nav className= {navbar ? "active" : ""}>
        <div className='logo'>Logo</div>
        <div className='ham-menu' onClick={Menufunc}>Menu</div>
        <div className={ menu ? " links-container active" : "links-container"}>
            <a onClick={Menufunc} className= "links" href="#home">Home</a>
            <a onClick={Menufunc} className= "links" href="#about-us">About Us</a>
            <a onClick={Menufunc} className= "links" href="#our-values">Our values</a>
            <a onClick={Menufunc} className= "links" href="#instuctor">Instuctor</a>
            <a onClick={Menufunc} className= "links" href="#contact">Contact</a>
        </div>

    </nav>
  )
}

export default Navbar
