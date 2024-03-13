"use client"
import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { DotLoader } from 'react-spinners';
import LanguageContext from '../../../../context/languageContext';
import CountryContext from '../../../../context/countryContext';
import Yellowdet from '../../../../Component/yellowPage/yellowdet';
import styles from "../../../styles/yellow.module.scss"
import Link from 'next/link';
import Button from '../../../../Component/ui/Button';
function YellowPage() {
    const context =useContext(LanguageContext)
    const [loading, setLoading] = useState(true);
  const router =useRouter()
  const {yellowPage}= router.query
  const axios =require("axios")
  const [yellowDetails,setYellowDetails]=useState([])
  const con =useContext(CountryContext)
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true)
        const response = await axios.get(process.env.API_URL + `/yellow-pages/${yellowPage}/yellow-page-departments`, {
          headers: {
            'Accept': 'application/json',
            'Accept-Language':localStorage.getItem("lan"),
            'country': con.country}
        });
        console.log(response.data.data)
        setYellowDetails(response.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, [context.language]);
  
  
  return (

    <div style={{marginTop:"100px"}} >
    {loading ? (
         <div className="spinner-wrapper" style={{ margin: "300px",marginLeft:"620px", textAlign: "center",height:"100vh" }}>
         <DotLoader color="#b31313" />
       </div>
      ) : (
      <div >
<div className="row" style={{margin:"20px"}}>

    {yellowDetails.map((yellow,index)=>(
    <div className={`col-lg-2 col-sm-4 col-md-5 ${styles.card}`}>
     <Link href={`/yellowPage/${yellowPage}/Elem/${yellow.id}`} style={{textDecoration:"none"}} >
      <Yellowdet yellow={yellow}/>
      </Link>
    </div>
    
   ))}
  </div>
</div> )}  
</div>
  )
}

export default YellowPage