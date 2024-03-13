import React, { useContext, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { DotLoader } from 'react-spinners';
import LanguageContext from '../../../../../../../context/languageContext';
import CountryContext from '../../../../../../../context/countryContext';
import SliderComponent from '../../../../../../../Component/SliderComponent';
import Show from '../../../../../../../Component/yellowPage/show/Show';
import Show2 from '../../../../../../../Component/yellowPage/show/Show2';
import useTranslation from 'next-translate/useTranslation';
import dynamic from 'next/dynamic'; 

const FacebookShareButton = dynamic(() => import('react-share').then(mod => mod.FacebookShareButton), {
  ssr: false 
});
const WhatsappShareButton = dynamic(() => import('react-share').then(mod => mod.WhatsappShareButton), {
  ssr: false
});
const SiWhatsapp = dynamic(() => import('react-icons/si').then(mod => mod.SiWhatsapp), {
  ssr: false
});

const FaFacebook = dynamic(() => import('react-icons/fa').then(mod => mod.FaFacebook), {
  ssr: false
});



function YallowDetails() {
  const context = useContext(LanguageContext);
  const [show, setShow] = useState();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { Details } = router.query;
  const { Elem } = router.query;
  const { yellowPage } = router.query;
  const { t } = useTranslation('common');
  const con = useContext(CountryContext);
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const [windowLoaded, setWindowLoaded] = useState(false);

  useEffect(() => {
    setWindowLoaded(true);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://daliluna.ltd/api" + `/yellow-pages/${yellowPage}/yellow-deps/${Elem}/elements/${Details}`, {
          headers: {
            'Accept': 'application/json',
            'Accept-Language': localStorage.getItem("lan"),
            'country':"sy"
          }
        });
        setShow(response.data.data);
        console.log(response.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [context.language]);

  return (
    <div>
      {loading ? (
        <div className="spinner-wrapper" style={{ margin: "300px", marginLeft: "620px", textAlign: "center", height: "100vh" }}>
          <DotLoader color="#b31313" />
        </div>
      ) : (
        <div>
          {show ? (
            <div style={{ marginTop: "-50px" }}>
              <SliderComponent image={show} />
              <div className="container">
                <div className="authordetails" style={{ marginTop: "50px" }}>
                  <h2 style={{ fontWeight: "bolder" }}>{show.address}</h2>
                </div>
              </div>
              <div className="details-main-wrapper">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-9">
                      <Show show={show} />
                      <Show2 show={show} />
                    </div>
                    <div className="social-share" style={{ marginTop: "40px", fontSize: "50px" }}>
                      <h4>{t("share")}</h4>
                      <>
      <FacebookShareButton url={url} style={{ margin: "0 20px " }}>
        <FaFacebook />
      </FacebookShareButton>
      
      <WhatsappShareButton url={url} style={{ margin: "0 20px " }}>
        <SiWhatsapp />
      </WhatsappShareButton>
    </>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) :
            (<p> Loading ..</p>)}
        </div>
      )}
    </div>
  )
}

export default YallowDetails;
