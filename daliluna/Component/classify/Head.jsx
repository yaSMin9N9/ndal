
import React from 'react';
import style from "../../src/styles/classifies.module.css";


const Head = ({  children }) => {
  return (
    <div className={style['section-heading']}>
    <div className='row align-items-center'>
      <div className='col-md-6 aos aos-init aos-animate' data-aos='fade-up'>
    {children}
    </div>
    </div>
    </div>
  );
};

export default Head;
