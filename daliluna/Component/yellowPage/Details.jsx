import React from 'react'
import { IoMdAddCircle } from 'react-icons/io'
import style from "../../src/styles/elemyel.module.css"
import Link from 'next/link'
function Details() {
  return (
    <>
        <div className= {`row  ${style["sorting-div"]}`}
      style={{display:"flex",alignItems:"center"
      ,marginLeft:"30px",borderRadius:"10px",color:"#0c253e"
      ,padding:"15px",marginLeft:"10px"}}>
  <div className="col-lg-3 col-md-4 col-sm-4" >
    <div className="count-search" >
      <p style={{marginTop:"20px"}}>Showing Results</p>
    </div>
  </div>
  <div className="col-lg-4 col-md-4 col-sm-4  "style={{display:"flex",alignItems:"ceter"}} >
    <div className="sortbyset">
      <div className="sorting-select" style={{display:"flex",alignItems:"ceter",justifyContent:"center"}}>
      <div className="sortbytitle" style={{width:"100px",color:"#000",marginTop:"10px"}}>Sort by</div>
        <select className="form-control select select2-hidden-accessible" data-select2-id={7} tabIndex={-1} aria-hidden="true">
          <option data-select2-id={9}>Default</option>
          <option>Price Low to High</option>
          <option>Price High to Low</option>
        </select>
        
      </div>
    </div>
    </div>
    <div className={`col-lg-4 col-sm-4 ${style["ll"]}`}>
    

</div>
</div>
    </>
  )
}

export default Details