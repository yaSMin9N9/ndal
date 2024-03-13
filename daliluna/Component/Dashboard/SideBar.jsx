import React from 'react'
import style from "./Sidebar.module.css"
import {HiUsers} from "react-icons/hi"
import {BsPostcardHeart} from "react-icons/bs"
import {BiCategory,BiCommentEdit} from "react-icons/bi"

import Link from 'next/link'
function SideBar() {
  return (
    <div className={style.SideBar}>
    <div className={style.SideCom}>
    <Link href="/Admin"> <h4 style={{color:"#DAC0A3",margin:"20px",fontWeight:"bolder"}}>DASHBOARD</h4></Link>
      <Link className={style.SideCom2} href="/Admin/classiffies"><HiUsers/> classiffies </Link>
      <Link className={style.SideCom2} href="/Admin/classiffies/1"><BsPostcardHeart/>classDepartment</Link>
      <Link className={style.SideCom2} href="/Admin/yellowPage"><BiCategory/> yellowPage </Link>
      <Link className={style.SideCom2} href="/Admin/yellowPage/1"><BiCommentEdit/>yellowPage department</Link>
    </div>
    </div>
  )
}

export default SideBar