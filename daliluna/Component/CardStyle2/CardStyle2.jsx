import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { FaBusinessTime } from 'react-icons/fa'
import { FiEye } from 'react-icons/fi'
import { motion } from 'framer-motion';
import { MdLocalPhone } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";
import Image from 'next/image';
import im from "./im.jpg"
import style from "../../src/styles/popularElem.module.css"
import useTranslation from 'next-translate/useTranslation';
function CardStyle2({item}) {
  const { t } = useTranslation('common');
  return (
    <div className={"card"} style={{margin:"20px"}}>
    <div className="blog-img">
      
      <motion.div  whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 2 }}
          className="item"
          transition={{ duration: 3 }}
         >
      <Image className={`card-img-top ${style['img']}`} src={im} alt="icons"  style={{borderRadius:"10px 10px 0px 0px",position:"relative"}}/>
      </motion.div>
      <h6 style={{position:"absolute",top:"40px",marginLeft:"10%",backgroundColor:"#2b294e",color:"#fff",padding:"10px",borderRadius:"10px"}}>{t("feature")}</h6>
      <div style={{position:"absolute",top:"40px",marginLeft:"75%",backgroundColor:"#fff",color:"2b294e",padding:"10px ",borderRadius:"50%"}}>
      <CiHeart style={{fontSize:"25px"}}/>
      </div>
    </div>
    <div className="bloglist-content"style={{border:"1px solid #d6cec7"}} >
      <div className="card-body" style={{padding:"10px"}}>
        
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",color:"gray"}}>
          
        <span><FaBusinessTime style={{marginRight:"5px"}}/>{item.time_open}</span>
      
      
        <span><FiEye style={{marginRight:"5px"}} />4000 </span>
          
        </div>
        <h6 style={{fontSize:"25px",marginBottom:"10px",marginTop:"10px",fontWeight:"bolder",whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>{item.name}</h6>
        <div className="blog-location-details" style={{color:"gray",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <div className="location-info">
           <MdLocalPhone /> {item.phone}
          </div>
      <div className="location-info">
        <i className="fa-solid fa-calendar-days" /> 
      </div>
    </div>
       
          
          <div className="blog-location-details" style={{color:"gray",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <div className="location-info">
           <MdLocalPhone /> {item.phone2}
          </div>
      <div className="location-info">
      <BiTimeFive /> 06 Oct, 2022
      </div>
    
        </div>
        <div className="amount-details" style={{marginTop:"20px"}}>
          <div className="amount">
            <span className="validrate" style={{color:"#c40a37",fontWeight:"bolder"}}>{item.price}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CardStyle2