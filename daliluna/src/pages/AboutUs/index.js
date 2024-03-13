import React from 'react'
import Image from 'next/image'
import im from "./aboutUs.jpg"
import useTranslation from 'next-translate/useTranslation'
function index() {
  const { t } = useTranslation('common');
  return (
    <div className="row" style={{marginTop:"130px"}}>
     
    <div style={{position:"relative",height:"125vh"}}>
    <Image  src={im} width={1000} height={450}/>
    <big className="col-lg-8 col-md-6 col-sm-12"  style={{borderRadius:"10px",padding:"20px",
    position:"absolute",backgroundColor:"#fff",
    fontSize:"15px",color:"#2b294e", top:"320px",right:"50px",textOverflow: "ellipsis"}}>
  {t("dal")}</big>
              </div>
              </div>
  )
}

export default index