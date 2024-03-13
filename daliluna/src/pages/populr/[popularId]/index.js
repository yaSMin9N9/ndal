import React, { useContext, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoPersonSharp } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from 'next/router';
import { DotLoader } from 'react-spinners';
import Content from '../../../../Component/Content';
import SliderComponent from '../../../../Component/SliderComponent';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';

function DetailsPage() {
  const router = useRouter();
  const { detailsCat } = router.query;
  const axios = require("axios");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
 
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(process.env.API_URL + `/popular-posts`, {
          headers: {
            'Accept': 'application/json',
            'Accept-Language': localStorage.getItem("lan"),
            'country': 'SY'
          }
        });
        setData(response.data.data);
        console.log(response.data.data);
        console.log(CarsId, detailsCat);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
      <div style={{ margin: "0px" }}>
        <SliderComponent image={null} />
      </div>
      {loading ? (
        <div style={{ marginTop: "70px" }}>
          <DotLoader color="#b31313" />
        </div>
      ) : (
        <div style={{ marginTop: "70px" }}>
          <div className="bannergallery-section">
            <div class="navigation" style={{ position: "absolute" }}>
              <i style={{ position: "absolute", bottom: "0px", right: "100px" }} class="fas fa-chevron-right next"></i>
            </div>
          </div>

          <section className="details-description">
            <div className="container">
              <div className="col-lg-12">
                <div className="about-details">
                  <div className="about-headings">

                    <div className="authordetails">
                      <h2 style={{ marginTop: "30px", fontWeight: "bolder" }}>{data.title || 'not found'}</h2>
                      <p style={{ color: "gray" }}>{data.product_name || "not found"}</p>

                    </div>
                  </div>
                  <div className="rate-details">
                    <p style={{ color: "#c40a37", fontWeight: "bolder" }}>{data.price || "not found"}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="details-main-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-11" >
                  <div className="card " style={{ marginTop: "50px", marginBottom: "50px", border: "none", boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                    <div className="card-header">
                      <h4><BiSolidMessageSquareDetail style={{ marginRight: "10px" }} />Details Post:</h4>
                    </div>
                    <div className="card-body">

                      <Content data={data} />

                    </div>
                  </div>
                  <div className="card " style={{ border: "none", boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                    <div className="card-header" style={{ border: "none" }}>
                      <i className="feather-list" />
                      <h4><IoPersonSharp style={{ marginRight: "10px" }} />Personal Information</h4>
                    </div>
                    <div className="card-body" >
                      <div className="lisiting-featues">
                        <div className="row" >
                          <div className="map-details">

                            <ul className="info-list">
                              <div className='row' style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                                <div className="col-lg-6 col-md-6">
                                  <div className="form-group formlast-input">
                                    <label style={{ fontWeight: "bold", marginRight: "20px" }} className="col-form-label"  >Email</label>
                                    <label className="col-form-label"  >{data.email}</label>
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                  <div className="form-group formlast-input">
                                    <label style={{ fontWeight: "bold", marginRight: "20px" }} className="col-form-label"  >address</label>
                                    <label className="col-form-label"  >{data.address}</label>
                                  </div>
                                </div>
                              </div>
                              <div className='row' style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                                <div className="col-lg-6 col-md-6">
                                  <div className="form-group formlast-input">
                                    <label style={{ fontWeight: "bold", marginRight: "20px" }} className="col-form-label"  >mobile1</label>
                                    <label className="col-form-label"  >{data.mobile}</label>
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                  <div className="form-group formlast-input">
                                    <label style={{ fontWeight: "bold", marginRight: "20px" }} className="col-form-label"  >mobile2</label>
                                    <label className="col-form-label"  >{data.mobile2}</label>
                                  </div>
                                </div>
                              </div>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
          <div className="social-share">
            <FacebookShareButton url={window.location.href}>
              Share on Facebook
            </FacebookShareButton>
            <TwitterShareButton url={window.location.href}>
              Share on Twitter
            </TwitterShareButton>
            <WhatsappShareButton url={window.location.href}>
              Share on WhatsApp
            </WhatsappShareButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
