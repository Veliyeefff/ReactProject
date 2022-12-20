import React from 'react'
import {MdLaptop} from 'react-icons/md'
import {IoDiamondOutline} from 'react-icons/io5'
import {BsGlobe} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'

function Service() {

  const icon_style = {
    color : "#f4623a",
    fontSize : "3rem"
  }

  return (
    <div className='service'>
        <h3 className='service-text-h3'>At Your Service</h3>
        <hr className='red-hr'/>
        <div className="service-cards">
          <div className="service-card">
            <IoDiamondOutline style={icon_style}></IoDiamondOutline>
            <h3 className='card-head'>Sturdy Themes</h3>
            <h4 className='card-text'>Our themes are updated regularly to keep them bug free!</h4>
          </div>
          <div className="service-card">
            <MdLaptop style={icon_style}></MdLaptop>
            <h3 className='card-head'>Up to Date</h3>
            <h4 className='card-text'>All dependencies are kept current to keep things fresh.</h4>
          </div>
          <div className="service-card">
            <BsGlobe style={icon_style}></BsGlobe>
            <h3 className='card-head'>Ready to Publish</h3>
            <h4 className='card-text'>You can use this design as is, or you can make changes!</h4>
          </div>
          <div className="service-card">
            <AiOutlineHeart style={icon_style}></AiOutlineHeart>
            <h3 className='card-head'>Made with Love</h3>
            <h4 className='card-text'>Is it really open source if it's not made with love?</h4>
          </div>
        </div>
    </div>
  )
}

export default Service