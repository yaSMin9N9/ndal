import React, { useEffect, useState } from 'react';
import quotes from "./quotes.png";
import im2 from "./testimonial-2.jpg";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import style from "./tes.module.css";
import axios from 'axios';  
import useTranslation from 'next-translate/useTranslation';

function Comment() {
  const [test, setTest] = useState([]);
  const { t } = useTranslation('common');
  const fetchCategories = async () => {
    try {
      const response = await axios.get(process.env.API_URL + '/visitor-messages', {
        headers: {
          'Accept': 'application/json',
          'Accept-Language': "en",
          'country': "syr"
        }
      });
      console.log(response.data.data);
      setTest(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <section className="col-lg-12" style={{ position: "relative", marginTop: "50px" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="testimonial-heading" style={{ top: "10px", left: "50px" }}>
              <h4>{t("theader")}</h4>
              <Image src={quotes} alt="quotes" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="rightimg" style={{ marginRight: "-100px" }} />
          </div>
        </div>
        <div className="row" style={{ position: "absolute", top: "100px" }}>
          <div className="col-lg-10 col-md-5 col-sm-12">
            <Carousel
              showArrows={true}
              showStatus={false}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={5000}
              stopOnHover={true}
              showIndicators={false}
              className={style["slider-wrapper"]}
              emulateTouch={true}
              style={{ marginTop: "50px", height: "200px" }}
            >
              {test.map((tes, index) => (
                <div key={index} className={style["testimonial-info"]}>
                  <div className="testimonialslider-heading d-flex" style={{ height: "100px" }}>
                    <div className="testi-img">
                      <Image src={im2} style={{ borderRadius: "50%" }} className="img-fluid" alt="testi-img" />
                    </div>
                    <div className="testi-author">
                      <h6>{tes?.name}</h6>
                      <p>{tes?.email}</p>
                    </div>
                  </div>
                  <div className={style["testimonialslider-content"]}>
                    <p>{tes.comment && tes.comment.length > 100 ? `${tes.comment.substring(0,500)}`: tes.comment}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Comment;
