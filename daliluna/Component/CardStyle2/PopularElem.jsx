
import React, { useEffect, useRef, useState } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from "../../src/styles/popularElem.module.css"
import Slider from "react-slick";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import axios from 'axios';
import CardStyle2 from './CardStyle2';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
function PopularElem() {
  const[data,setData]=useState([])
  const { t } = useTranslation('common');
  const language = typeof window !== 'undefined' ? localStorage.getItem("lan") || "ar" : "ar";

  useEffect(() => {
    const fetchCategories = async () => {
      
      try {
        const response = await axios.get('https://daliluna.ltd/old_daliluna/public/api/popular-elements', {
          headers: {
            'Accept': 'application/json',
            'Accept-Language': "en",
            'country': 'SY'
          }
        });
        console.log(response.data.data)
        
      setData(response.data.data)
      } catch (error) {
        console.log(error);
      }
    };
    
    fetchCategories();
  }, []);
  
  const sliderRef = useRef(null);
  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow:3, 
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  
  return (
    <div>
 <section className={style["featured-section"]}>
  <div className="container">
    <div className='col-lg-11'>
    <div className="row align-items-center">
      <div className={style["aos aos-init aos-animate"]} style={{display:"flex",alignItems:"center",justifyContent:"space-between"}} data-aos="fade-up">
        <div className={style["section-heading"]}>
          <h2 style={{ marginTop: '30px', marginBottom: '20px',position:"relative", zIndex:"2"}}><span style={{ backgroundColor: '#b31313',zIndex:"-1", color: '#fff', borderRadius: '50%',width:"70px",height:"70px", padding: '15px 10px', position:"absolute"}} className={style["title-right"]}></span> {t('pheader')}</h2>
          <p style={{marginBottom:"30px",color:"gray",fontWeight:"700"}}>{t("pmessage")}</p>
        </div>
        <div className={style[" text-md-end aos"]} data-aos="fade-up" style={{display:"flex"}}>
        <div className={style["owl-nav mynav2"]} />
       {
        language === "ar" || language === "fa" ? (<>
            <button type="button" role="presentation" class={style["owl-next"]} onClick={goToNext} ><GrNext /></button>
        <button type="button" role="presentation" className={style["owl-prev"]} onClick={goToPrev}><GrPrevious /></button>
       
        </>):(<><button type="button" role="presentation" className={style["owl-prev"]} onClick={goToPrev}><GrPrevious /></button>
        <button type="button" role="presentation" class={style["owl-next"]} onClick={goToNext} ><GrNext /></button>
      </>)
       }
          
       </div>
      </div>
      
    </div>
    </div>
    <div className="row">
     
          <div className="col-md-12" >
          <Slider {...settings} ref={sliderRef}  className={style["owl-carousel featured-slider grid-view"]} 
        style={{display:"flex",justifyContent:"center"}}>
       
       {
        data?.map((item,index)=>(
          <Link href={`/yellowPage/${item.province_id}/Elem/${item.yellow_dep_id}/${item.id}`} className={`col-lg-4 col-md-5 col-sm-6 col-sx-12 ${style["link"]}`}
          style={style.link}>
          <CardStyle2 item={item}/>
          </Link>
            ))}
         
          
          </Slider>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default PopularElem