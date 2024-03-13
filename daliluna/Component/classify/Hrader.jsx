
import React from 'react';
import style from "../../src/styles/classifies.module.css";


const Header = ({  children }) => {
  return (
    <div>
      <div className="translatable">
      <section className={style['category-section']} style={{ height: 'auto' }}>
        <div className='container' >
    {children}
    </div>
    </section>
    </div>
    </div>
  );
};

export default Header;
