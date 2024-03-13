
import React from 'react';
import style from "./Earn.module.css";


const Header = ({  children }) => {
  return (
    <div>
      <section className={style["cta-section"]}>
        <div className="container">
          <div className='col-lg-9'></div>
    <div className={`row ${style["col"]}`} style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
      { children}
    </div>
    </div>
    </section>
    </div>
  );
};

export default Header;
