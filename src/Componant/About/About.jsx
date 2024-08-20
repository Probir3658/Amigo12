import './About.css'
import React from 'react'
import img2 from "./Image/LOGO1.png"
import img3 from "./Image/OURTNS.jpg"
import img4 from "./Image/CORPORATE-LOGO.jpg"
import CountUp from "react-countup";
import Counter from './Counter/Counter'

const About = () => {
  return (
    <div className='map1'>
      
      <div className='image-text'>
        {/* <img src={img} className='img12'/> */}
        <div className='img12'></div>
        <p className='text2'>Amigo is a brand operating under Mitra agro enterprises Ltd based in West Bengal, India.<br/><br/>

          Over the decade the company has built its significance inside the domestic and the international market. The company essentially involves and believes in house manufacturing, endeavoring to provide the best to its customers. We can be recognized as one of the largest manufacturing units of calculators in India. The vision of the company is to provide the best in quality of products with unbeatable prices. With a constant effort and continuous progress of enhancing features that was never offered before. Therefore, raising bars and gifting its consumers with more lavishing designs and extraordinary products.<br/><br/>

          With a strength of over hundreds of heads and an area of 100 acres the company believes to expand in the international markets. We endeavour to offer high-quality calculators and personalized customer service while motivating motivation, creativity and teamwork in a constantly evolving environment. As core values, we wish to deliver satisfaction to our customer.<br/><br/>

          We are a reliable manufacturer, distributor/wholesaler, exporter, trader and<br/> supplier of high-end as well as modern calculators in the market since <br/>2009.A Make In India member and a brainchild of Mr. Joydeb Mitra, we <br/>produce bulk products within the stipulated period. Thus, we are attentive towards the punctuality of product delivery.</p>
        <div className='text1'>About Us</div>
      </div>
        <div>
          <Counter/>
        </div>
      <div className='image-text1'>
        <div className='img13'></div>
        <div className='text11 underline'><b> OUR VISION </b></div> 
        <p className='text12'>Being one of the biggest calculator manufacturers in india, our mission is to satisfy customer demands and expectations by offering the highest calibre goods at competitive prices.</p>

        <div className='text13 underline'><b> OUR MISSION </b></div> 
        <p className='text14'>"QUALITY FIRST,COST SECOND"<br/> Our AIM is to have better creativity, team work and a constantly evolving atmosphere within the organisation. Our Core Value is to Satisfy the Customer needs.</p>
      </div>
      <div>
        <img src={img4} className='spon'/>
      </div>
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117878.8697486497!2d88.27334022484438!3d22.58977224980281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277c9af98dae1%3A0xb6ca6e71295ec47f!2samigo!5e0!3m2!1sen!2sin!4v1722944286385!5m2!1sen!2sin" 
        width="100%" 
        height="450" 
        style={{border:0}}
        allowFullScreen="" 
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}
export default About
