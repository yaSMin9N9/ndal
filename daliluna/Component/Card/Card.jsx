// Card.js
import React from 'react';
import Image from 'next/image';
import { CiHeart } from "react-icons/ci";
import { IoMdLocate } from "react-icons/io";
import { FiEye } from "react-icons/fi";
import { WiTime8 } from "react-icons/wi";
import style from "../../src/styles/popular.module.css";
import im1 from "./feature-2.jpg"
import useTranslation from 'next-translate/useTranslation';
const Card = ({ item }) => {
  const { t } = useTranslation('common');
  return (
    <div  className={`card`} style={{marginRight:"20px"}}>
          <div className="blog-img" style={{position:"relative"}}>
            
            <Image className={`card-img-top ${style['img']}`} src={im1} alt="icons"  style={{borderRadius:"10px 10px 0px 0px"}}/>
            <div >
             <h6 style={{position:"absolute",top:"20px",left:"70%",backgroundColor:"#2b294e",color:"#fff",padding:"10px",borderRadius:"10px",zIndex:"55"}}>{t("feature")}</h6>
            <div style={{position:"absolute",top:"20px",left:"2%",backgroundColor:"#fff",color:"2b294e",padding:"10px ",borderRadius:"50%",zIndex:"55"}}>
            <CiHeart style={{fontSize:"25px"}}/>
            </div>
            </div>
            
            
          </div>
          <div className="bloglist-content"style={{border:"1px solid #d6cec7"}} >
            <div className={`card-body `} style={{padding:"10px "}}>
             
                <div className='card-title' style={{display:"flex",alignItems:"center",justifyContent:"space-between",color:"gray"}}>
                
              <span><IoMdLocate /> Vehicle</span>
            
            
              <span><FiEye style={{marginRight:"5px"}} />4000 </span>
               
              </div>
              <h6 style={{fontSize:"25px",marginBottom:"10px",marginTop:"10px",fontWeight:"bolder",whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>{item.title}</h6>
              
                
                <div className="blog-location-details" style={{color:"gray",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                 
             <p>{item.product_name}</p> 
             <p style={{display:"flex",alignItems:"center"}}><WiTime8 style={{marginRight:"3px"}}/>06 Oct, 2022</p>
          
                
              </div>
              <div className="amount-details" style={{marginTop:"20px",display:"flex",justifyContent:"space-between"}}>
                <div className="amount">
                  <span className="validrate" style={{color:"#b31313",fontWeight:"bolder"}}>{item.price} s.p</span>
                </div>
                <div><p style={{backgroundColor:"gray", padding:"3px",borderRadius:"5px",backgroundColor:"#2b294e",color:"#fff",fontWeight:"bold"}}>4.5</p></div>
              </div>
            </div>
          </div>
        </div> 
  );
};

export default Card;
