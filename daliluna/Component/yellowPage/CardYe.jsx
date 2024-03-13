import React, { useCallback, useEffect, useState } from 'react';
import style from "../../src/styles/yellowPage.module.css";
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import Button from '../ui/Button';
import { useRouter } from 'next/router';

function CardYe({ yel }) {
  const router = useRouter();
  const { t } = useTranslation('common');
  const handleButtonClick = useCallback(() => {
    router.push(`/yellowPage/${yel.id}`);
  }, []);

  
  const [isArabic, setIsArabic] = useState(false);

  useEffect(() => {
    setIsArabic(localStorage.getItem("lan") === "ar" || localStorage.getItem("lan") === "fa");
  }, []);


  useEffect(() => {
    const handleLocalStorageChange = () => {
      setIsArabic(localStorage.getItem("lan") === "ar" || localStorage.getItem("lan") === "fa");
    };

    window.addEventListener('storage', handleLocalStorageChange);

    return () => {
      window.removeEventListener('storage', handleLocalStorageChange);
    };
  }, []);
  const buttonPosition = isArabic ? { right: "280px" } : { right: "10px" };
  return (
    <div >
      <div
        className="location-info"
        style={{
          background: "#f9fafc",
          border: "1px solid #e3e3e3",
          borderRadius: "10px",
          padding: "20px 20px",
          alignItems: "center",
          flexWrap: "wrap",
          height: "160px",
          position: "relative"
        }}
      >
        <div className={style["location-img"]} style={{ display: "flex", alignItems: 'center', justifyContent: "flex-start" }}>

          <Image width={150} height={120} style={{ borderRadius: "10px" }}
            src={yel.image || ""} alt="locations" />
          <div className={style["element-style"]} style={{ marginTop: "10px", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
            <h5 style={{ color: "#2b294e", fontWeight: "bolder", fontSize: "15px", marginTop: "5px", marginLeft: "10px", marginRight: "10px" }}>{yel.name}</h5>
            <Button
              style={{
                backgroundColor: "#b31313",
                textAlign: "start",
                marginLeft: "10px",
                color: "#fff",
                fontWeight: "bold",
                borderRadius: "5px",
                fontSize: "13px",
                border: "none",
                padding: "5px",
                marginTop: "20px",
                position: "absolute",
                ...buttonPosition, 
                bottom: "10px"
              }}
              onClick={handleButtonClick}
            >
              {t('butdetails')}
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CardYe;
