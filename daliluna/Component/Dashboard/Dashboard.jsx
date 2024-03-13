import React from 'react'
import MainBar from './MainBar'
import SideBar from './SideBar'

function Dashboard() {
  return (
    <div className='row'>
    <div  style={{marginTop:"150"}}>
        <SideBar />
        <MainBar />
    </div>
    </div>
  )
}

export default Dashboard