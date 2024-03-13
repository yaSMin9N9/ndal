import React, { useEffect, useRef, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from "../../src/styles/popular.module.css";
import useTranslation from 'next-translate/useTranslation';
import Slider from "react-slick";
import { GrPrevious, GrNext } from "react-icons/gr";
import axios from 'axios';
import Card from './Card';
import Link from 'next/link';

function MostPop() {
  const { t } = useTranslation('common');
  const [data, setData] = useState([]);
  const sliderRef = useRef(null);
  const language = typeof window !== 'undefined' ? localStorage.getItem("lan")  : "ar";

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://daliluna.ltd/old_daliluna/public/api/popular-posts', {
          headers: {
            'Accept': 'application/json',
            'Accept-Language': "en",
            'country': 'SY'
          }
        });
        setData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const lang = localStorage.getItem("lan") || "en";
    // Set language-dependent logic here if needed
  }, []); // Run only once after component mounts

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
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
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
          <div className="row align-items-center">
          <div className={style.mino} data-aos="fade-up" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
  <div className={style["section-heading"]}>
    <h2 style={{ marginTop: '30px', marginBottom: '20px', position: "relative", zIndex: "2" }}>
      <span style={{ backgroundColor: '#b31313', zIndex: -1, color: '#fff', borderRadius: '50%', width: "70px", height: "70px", padding: '15px 10px', position: "absolute" }} className={style["title-right"]}></span>
      {t("fheader")}
    </h2>
    <p style={{ color: "gray", fontWeight: "700" }}>{t("fmessage")}</p>
  </div>
  <div className={style[" text-md-end aos"]} data-aos="fade-up" style={{display:"flex"}}>
        <div className={style["owl-nav mynav2"]} />
        {
       language === "ar" || language === "fa" ? (
        <>
            <button type="button" role="presentation" class={style["owl-next"]} onClick={goToNext} ><GrNext /></button>
        <button type="button" role="presentation" className={style["owl-prev"]} onClick={goToPrev}><GrPrevious /></button>
       
        </>):(<><button type="button" role="presentation" className={style["owl-prev"]} onClick={goToPrev}><GrPrevious /></button>
        <button type="button" role="presentation" class={style["owl-next"]} onClick={goToNext} ><GrNext /></button>
      </>)
       }
       </div>
   
</div>

          </div>
          <div className="row" style={{ marginTop: "20px" }}>
            <div className="col-md-12">
              <Slider {...settings} ref={sliderRef} className={style["owl-carousel featured-slider grid-view"]} style={{ display: "flex", justifyContent: "center", blockSize: "block" }}>
                {data.map((item, index) => (
                  <Link key={index} href={`/classify/${item.class_dep_id}/posts/${item.id}`} className={`col-lg-4 col-md-5 col-sm-6 col-sx-12 ${style["link"]}`}>
                    <Card item={item} />
                  </Link>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MostPop;
