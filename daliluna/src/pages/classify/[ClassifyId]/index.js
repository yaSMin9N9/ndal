import React, { useEffect, useState, useContext } from 'react';
import { IoMdAddCircle, IoMdLocate } from "react-icons/io";
import Link from 'next/link';
import { useRouter } from 'next/router';
import style from "../../../styles/classifyId.module.css";
import CountryContext from '../../../../context/countryContext';
import Filter from '../../../../Component/filter/Filter';
import Card from '../../../../Component/Card/Card';
import { DotLoader } from 'react-spinners';
import Button from '../../../../Component/ui/Button';
import TwoSubHeader from '../../../../Component/classify/TwoSubHeader';
import Col from '../../../../Component/classify/Col';
import Col7 from '../../../../Component/classify/Col7';
import { useCallback } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { CiHeart } from 'react-icons/ci';
import im1 from "../../../../Component/Card/feature-2.jpg";
import { FiEye } from 'react-icons/fi';
import { WiTime8 } from 'react-icons/wi';
import Image from 'next/image';

const Cars = React.memo(() => {
  const { t } = useTranslation('newp');
  const axios = require("axios");
  const [data, setData] = useState([]);
  const router = useRouter();
  const context = useContext(CountryContext);
  const con = context.country;
  const [loading, setLoading] = useState(true);
  const { ClassifyId } = router.query;

  const handleButton = useCallback(() => {
    router.push(`/addNewPost/${ClassifyId}`)
  },[])

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(process.env.API_URL +`/classified-departments/${ClassifyId}/posts`, {
          headers: {
            'Accept': 'application/json',
            'Accept-Language': localStorage.getItem("lan"),
            'country': "ABW"
          }
        });
        console.log(response.data.data);
        setData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [con, ClassifyId]);

  return (
    <div className={`col-lg-12 ${style["all"]}`}>
      <Filter className="col-lg-4" />
      <Col7>
        <Col>
          <TwoSubHeader />
          <div className={`col-lg-4 col-sm-4 ${style["ll"]}`}>
            <Button style={{ textDecoration: "none", marginLeft: "70px", padding: "10px 10px", color: "#fff", borderRadius: "5px", border: "none", backgroundColor: "#b31313", fontWeight: "700px" }} onClick={handleButton}>
              <IoMdAddCircle style={{ fontSize: "20px" }} />
              {t('add')}
            </Button>
          </div>
        </Col>
        <div className={`row ${style["row"]}`}>
          {loading ? (
            <div className="spinner-wrapper" style={{ marginTop: "100px", marginLeft: "320px", textAlign: "center", height: "100vh" }}>
              <DotLoader color="#b31313" />
            </div>
          ) : (
            data.length === 0 ? (
              <h1 style={{ marginTop: "50px", textAlign: "center",color:"#2b294e" }}>there are no posts yet</h1>
            ) : (
              data.map((item, index) => (
                <Link key={index} href={`/classify/${ClassifyId}/posts/${item.id}`} className="col-lg-5 col-md-5 col-sm-3" style={{ margin: "10px", textDecoration: "none", color: "inherit" }}>
                  <div className="blog-img" style={{position:"relative"}}>
                    <Image className={`card-img-top ${style['img']}`} src={item.images[0]} alt="icons" width={100} height={200} style={{borderRadius:"10px 10px 0px 0px"}}/>
                  </div>
                  <div className="bloglist-content"style={{border:"1px solid #d6cec7"}} >
                    <div className={`card-body `} style={{padding:"10px "}}>
                      <div className='card-title' style={{display:"flex",alignItems:"center",justifyContent:"space-between",color:"gray"}}>
                        <span><IoMdLocate /> Vehicle</span>
                        <span><FiEye style={{marginRight:"5px"}} />4000 </span>
                      </div>
                      <h6 style={{fontSize:"25px",marginBottom:"10px",marginTop:"10px",fontWeight:"bolder",whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>{item.title}</h6>
                      <div className="blog-location-details" style={{color:"gray",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                        <p>{item.product_name}</p> 
                        <p style={{display:"flex",alignItems:"center"}}><WiTime8 style={{marginRight:"3px"}}/>06 Oct, 2022</p>
                      </div>
                      <div className="amount-details" style={{marginTop:"20px",display:"flex",justifyContent:"space-between"}}>
                        <div className="amount">
                          <span className="validrate" style={{color:"#b31313",fontWeight:"bolder"}}>{item.price} s.p</span>
                        </div>
                        <div><p style={{backgroundColor:"gray", padding:"3px",borderRadius:"5px",backgroundColor:"#2b294e",color:"#fff",fontWeight:"bold"}}>4.5</p></div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            )
          )}
        </div>
      </Col7>
    </div>
  );
});

export default Cars;
