// ButtonSection.js
import React, { useEffect, useState } from 'react';
import style from "./Earn.module.css";
import useTranslation from 'next-translate/useTranslation';

const ButtonSection = ({ showSelector, handlePostButtonClick, selectedCategory, handleCountrySelection, clas, handlesubSelection, cc }) => {
  const { t } = useTranslation('common');
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  useEffect(() => {
    // Reset subcategory selection when category changes
    setSelectedSubcategory("");
  }, [selectedCategory]);

  const handleSubcategorySelection = (e) => {
    setSelectedSubcategory(e.target.value);
  };
  return (
    <div className="cta-btn">
      <button
        style={{
          color: '#000',
          border: "none",
          backgroundColor: "#b31313",
          fontWeight: 'bold',
          fontSize: '16px',
          padding: '12px 31px',
          borderRadius: '8px',
          textDecoration: 'none',
        }}
        onClick={handlePostButtonClick}
      >
       {t("posted")}
      </button>

      {showSelector && (
        <div className="form-group" style={{ marginTop: "20px" }}>
          <div className="pass-group group-img">
            <label className={style['left-label']} style={{ fontWeight: "bolder", color: "#0d233e", marginRight: "20px" }} htmlFor="cars">
              {t("category")}
            </label>
            <select
              value={selectedCategory}
              onChange={handleCountrySelection}
              style={{
                padding: '8px',
                marginBottom: '8px',
                width: '250px',
                borderRadius: '10px',
              }}
            >
              <option value="">{t("select")}</option>
              {clas.map((category, index) => (
                <option key={index} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
      {showSelector && selectedCategory && (
        <div className="form-group">
          <div className="pass-group group-img">
            <label style={{ fontWeight: "bolder", color: "#0d233e", marginRight: "20px" }} className={style['left-label']} htmlFor="cars">
              {t("subcategory")}
            </label>
            <select
              value={selectedSubcategory}
              onChange={handleSubcategorySelection}
              style={{
                padding: '8px',
                marginBottom: '8px',
                width: '250px',
                borderRadius: '10px',
              }}
            >
              <option value="">{t("sselect")}</option>
              {cc.map((subcategory, index) => (
                <option key={index} value={subcategory.id}>
                  {subcategory.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default ButtonSection;
