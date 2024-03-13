import React, { useState, useEffect, useContext, useCallback } from 'react';
import axios from 'axios';
import Link from 'next/link';
import style from '../../src/styles/classifies.module.css';
import LanguageContext from '../../context/languageContext';
import CountryContext from '../../context/countryContext';
import useTranslation from 'next-translate/useTranslation';
import Header from './Hrader';
import Head from './Head';
import Row from './Row';
import Popup from 'reactjs-popup';
import { IoClose } from 'react-icons/io5';
import { DotLoader } from 'react-spinners';
import Image from 'next/image';
function CombinedComponent() {
  const { t } = useTranslation('common');
  const [category, setCategory] = useState([]);
  const [popupData, setPopupData] = useState([]);
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const context = useContext(LanguageContext);
  const con = useContext(CountryContext);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(process.env.API_URL + "/classifieds", {
          headers: {
            'Accept': 'application/json',
            'Accept-Language': localStorage.getItem("lan"),
            'country': con.country,
          }
        });
        console.log('API data:', response.data.data);
        setCategory(response.data.data);
        console.log(category);
      } catch (error) {
        console.log('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, [context.language]);

  const handlePopup = useCallback(async (itemId) => {
    try {
      setLoading(true);
      const response = await axios.get(
        process.env.API_URL + `/classifieds/${itemId}/class-deps`,
        {
          headers: {
            'Accept': 'application/json',
            'Accept-Language': localStorage.getItem("lan"),
            'country': con.country
          }
        }
      );
      console.log(response);
      setPopupData(response.data.data);
      setPopupIsOpen(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }, [context.language, con.country]);

  return (
    <Header onClick={() => setPopupIsOpen(false)}>
      <Head>
        <h2 style={{ marginTop: '30px', marginBottom: '20px', position: "relative", zIndex: "2" }}>
          <span className={style['title-left']} style={{ backgroundColor: '#b31313', zIndex: "-1", color: '#fff', borderRadius: '50%', width: "70px", height: "70px", padding: '15px 10px', position: "absolute" }}>
          </span> {t('cheader')}
        </h2>
        <p style={{
          marginBottom: "30px",
          color: "gray",
          fontWeight: "700"
        }}>{t('cmessage')}</p>
      </Head>
      <Row>
        {category.map((item) => (
          <div className='col-lg-2 col-md-3 col-sm-6' key={item.id}>
      <div className='categories-content'>
      <Popup
                  onClick={()=>setPopupIsOpen(false)}
                    trigger={
                      <div  className={style['category-links']}>
                        <h5 style={{fontWeight:"bold"}}>{item.name}</h5>
                        <Image onClick={() => handlePopup(item.id)}  className={style['img']} width={100} height={100} src={`${item.icon}`} alt='icons' />
                      </div>
                    }
                    position='right center'
                    open={popupIsOpen}
                    closeOnDocumentClick
                  >
                    <div className={style['popup-overlay']}>
                      <div className={style['popup']}  style={{marginTop:"200px"}}>
                        <div className={style['popup-content']} style={{ zIndex: '88' }}>
                       <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}> <IoClose  className={style['close']} onClick={()=>setPopupIsOpen(false)} />
                          <h2 style={{ color: '#b31313' }}>{item.name}</h2>
                          <IoClose className={style['close']} onClick={() => setPopupIsOpen(false)} />
                          </div>

                          {loading ? (
  <DotLoader color="#36d7b7" />
) : (popupData.map((popupItem, index) => (
                            <Link  key={index} style={{ zIndex: '88' ,textDecoration:"none"}} href={`/${popupItem.id}`} className='linkStyle'>
                              <h5 style={{display:"flex",alignItems:"center",justifyContent:"start"}}>
                                <h5 style={{display:"flex",backgroundColor:"#fff",color:"#000",marginTop:"10px",marginRight:"10px",padding:"3px 7px",borderRadius:"50%"}}>{popupItem["count posts"]}</h5>
                                {popupItem.name}
                              </h5>
                            </Link>
                          ))) 
                         }
                        </div>
                      </div>
                    </div>
                  </Popup>
</div>

          </div>
        ))}
      </Row>
    </Header>
  );
}

export default CombinedComponent;