
import React, { useContext, useEffect } from 'react'
import style from "../../src/styles/yellowPage.module.css"
import { useState } from 'react'
import useTranslation from 'next-translate/useTranslation';
import CardYe from './CardYe'
import CountryContext from '../../context/countryContext'
import LanguageContext from '../../context/languageContext'

function YellowCom() {
  const { t } = useTranslation('common');
  const[yellow, setYellow]=useState([])
  const con =useContext(CountryContext)
const axios =require("axios")
const context =useContext(LanguageContext)
useEffect(() => {
const fetchYellow = async () => {
  
  try {
    
    const response = await axios.get(process.env.API_URL +`/yellow-pages`, {
      headers: {
        'Accept': 'application/json',
        'Accept-Language': localStorage.getItem("lan"),
        'country': con.country
        }
    });
    console.log(response.data.data)
    setYellow(response.data.data);
  }
 catch (error) {
    console.log(error);
  }
}
    fetchYellow();
  }, [context.language]);

  return (
    <>    
          <section className={style["popular-locations"]}>
    
    <div className="container" >
    <div className='col-lg-12'>
      <div className={style["section-heading"]}>
        <h2 style={{color:"#fff",marginTop:"30px",position:"relative", zIndex:"2"}}>{t("yheader")}</h2>
        <p style={{color:"#fff",fontWeight:"500",marginBottom:"30px"}}>{t("ymessage")}</p>
      </div>
      </div>
      <div className={style["location-details d-flex"]}>
      <div >
  <div className="row">
    {yellow.map((yel, index) => (
      <div className={`col-lg-4 col-md-6 ${style['location-info-details']}`}  key={index}>
        <CardYe yel={yel } />
      </div>
    ))}
  </div>
</div>

      </div>
      
    </div>
  </section>
</>

  )
}

export default YellowCom