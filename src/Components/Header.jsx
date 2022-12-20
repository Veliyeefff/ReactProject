import React from 'react'
function Header() {
  // window.onscroll= function(){
  //   if(document.documentElement.scrollTop > 50){
  //     let navbar = document.querySelector(".navbar")
  //     navbar.style.backgroundColor = "white"
  //     navbar.style.color = 'black'; 
  //   }
  // }
  return (
    <div className='header'>
        <div className='navbar'>
          <h4 className='navbar-header'>Start Bootstrap</h4>
          <ul className='navbar-list'>
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="header-text">
            <h3 className='header-text-h3'>Your Favorite Place for Free Bootstrap Themes</h3>
            <hr className='red-hr' />

            <h4 className='header-text-h4'>Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!</h4>
            <button className='find'>Find Out More</button>
        </div>
      </div>
  )
}

export default Header