"use client"
import  { useContext, useEffect, useState } from 'react'
import { IoMdAddCircle } from "react-icons/io";
import  Link from 'next/link'
import { useRouter } from 'next/router';
import style from "../../../../../styles/elemyel.module.css"
import LanguageContext from '../../../../../../context/languageContext';
import CountryContext from '../../../../../../context/countryContext';
import Filter from '../../../../../../Component/filter/Filter';
import YellowCard from '../../../../../../Component/yellowPage/YellowCard';
import Details from '../../../../../../Component/yellowPage/Details';
import { DotLoader } from 'react-spinners';
import useTranslation from 'next-translate/useTranslation'

  

function Newyellow() {
  const { t } = useTranslation('common');
  const [loading, setLoading] = useState(true);
  const[details ,setDetails]=useState([])
  const axios =require("axios")
  const router =useRouter()
  const {Elem} = router.query
  const {yellowPage} =router.query
  const context =useContext(LanguageContext)
  const con =useContext(CountryContext)
  const[isArabic,setIsArabic]=useState(false)
  useEffect(() => {
    setIsArabic(localStorage.getItem("lan") === "ar" ||"fa");
  }, []);
  useEffect(() => {
    
   
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await axios.get(process.env.API_URL+`/yellow-page-departments/${yellowPage}/elements`, {
          headers: {
            'Accept': 'application/json',
            'Accept-Language': localStorage.getItem("lan"),
            'country': con.country
          }
        });
        setDetails(response.data.data);
        setLoading(false);
        console.log(details)
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, [context.language, con.country]);
const status = isArabic ? { marginRight: "280px" } : {marginLeft: "280px" };
    const newPost ="/addNewPost"
  return (
    <div style={{marginTop:"100px",background: "background: #f9fafc;"}}>
    <div >
    <div className={`col-lg-12 ${style["all"]}`} >
    <div className="col-lg-3 theiaStickySidebar" style={{position: 'relative', overflow: 'visible', boxSizing: 'border-box', minHeight: 1}}>
  <div className="theiaStickySidebar" style={{paddingTop: 0, paddingBottom: 1, position: 'static', transform: 'none', top: 0, left: '48.5px'}} data-select2-id={27}><div className="listings-sidebar" data-select2-id={26}>
    <Filter/>
    </div>
    <div className="resize-sensor" style={{position: 'absolute', inset: 0, overflow: 'hidden', zIndex: -1, visibility: 'hidden'}}><div className="resize-sensor-expand" style={{position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: -1, visibility: 'hidden'}}><div style={{position: 'absolute', left: 0, top: 0, transition: 'all 0s ease 0s', width: 837, height: 1088}} /></div><div className="resize-sensor-shrink" style={{position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: -1, visibility: 'hidden'}}><div style={{position: 'absolute', left: 0, top: 0, transition: '0s', width: '200%', height: '200%'}} /></div></div></div></div>

    <div className="col-lg-7">
    <Details/>
    { loading ? (
  <div className="spinner-wrapper" style={{ marginTop: "100px", ...status, textAlign: "center", height: "100vh" }}>
    <DotLoader color="#b31313" />
  </div>
) : ( details.length === 0 ? (
  <h1 style={{ marginTop: "50px", textAlign: "center",color:"#2b294e" }}>{t("nopost")}</h1>
) : (details.map((det, index)=>(

  <Link  key={index} href={`/yellowPage/${yellowPage}/Elem/${Elem}/${det.id}`} className="card" style={{borderRadius:"10px",marginTop:"20px",marginRight:"10px",marginLeft:"10px",textDecoration:"none",color:"inherit"}}>
    <YellowCard det={det}/>
  </Link>
))))}



</div>

</div>
    </div>
    </div>
  )
}

export default Newyellow