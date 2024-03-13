import React from 'react'

function HeaderYellowDetails({children}) {
  return (
    <div style={{marginTop:"100px",background: "background: #f9fafc;"}}>
    <div className={`col-lg-12 ${style["all"]}`} >
    <div className="col-lg-3 theiaStickySidebar" style={{position: 'relative', overflow: 'visible', boxSizing: 'border-box', minHeight: 1}}>
  <div className="theiaStickySidebar" style={{paddingTop: 0, paddingBottom: 1, position: 'static', transform: 'none', top: 0, left: '48.5px'}} data-select2-id={27}><div className="listings-sidebar" data-select2-id={26}>
    {children}
    
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default HeaderYellowDetails