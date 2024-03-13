import Image from "next/image";
import im from "./49994mod.gif";
import styles from "../../styles/Home.module.css";
import useTranslation from 'next-translate/useTranslation';
import LanguageContext from '../../../context/languageContext'; 
import { useContext } from "react";

function Homee() {
  const { t } = useTranslation('common');
  const { setLanguage } = useContext(LanguageContext);
  
      return (
       <div>  
        <div className={styles["banner-section"]} style={{marginTop:"20px"}}>
        
        <div className="container">
          <div className={styles["home-banner"]}>
            <div className="row align-items-center" >
              <div className="col-lg-12">
                <div style={{margin:"0px"}} className={styles["section-search aos"]} data-aos="fade-up">
                  <div className={styles['coll']} style={{display:"flex",alignItems:'center',justifyContent:"space-around",marginTop:"100px"}}>
                 <div style={{position:"relative",margin:"0px 100px"}}>
               
                 <h3 className={styles["hh"]} style={{marginTop:"50px"}}>{t('Message')}</h3>
                 <h1  className={styles['bb']} style={{fontWeight:"bolder ",textAlign: "center",fontWeight:"800",fontSize:"42px"}}>{t('customMessage')}
                  </h1>
                <p style={{textAlign: "center"}} className={styles['pp']} >{t('customMessage1')}</p>
                 </div>
                 <Image className={styles['img']}  src={im} width={500} height={400}/>
                  </div>
                 
                </div>
              </div>
              <div>
         
        </div>
            </div>
          </div>
        </div>
</div>


</div>
   
    
      )
    }
    
    


export default Homee