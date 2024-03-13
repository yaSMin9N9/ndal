import React from 'react'
import style from "../../src/styles/classifyId.module.css"
function Col({children}) {
  return (
      <div className= {`row  ${style["sorting-div"]}`}
      style={{display:"flex",alignItems:"center"
      ,marginLeft:"30px",borderRadius:"10px",color:"#0c253e"
      ,padding:"15px",marginLeft:"10px"}}>
        {children}
        </div>)
}

export default Col