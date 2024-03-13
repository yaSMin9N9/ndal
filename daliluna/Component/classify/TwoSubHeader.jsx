import React from 'react'

function TwoSubHeader() {
  return (
    <>
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
    </>
  )
}

export default TwoSubHeader