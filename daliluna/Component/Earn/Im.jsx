import Image from 'next/image'
import React from 'react'
import style from "./Earn.module.css";
import Imm from "./earn.gif"
function Im() {
  return (
    <div>
       
    <div className="cta-img">
      <Image className={style["im"]} src={Imm} width={400} height={400} />
   
  </div></div>
  )
}

export default Im