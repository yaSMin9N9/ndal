
import React from 'react';
import style from "../../src/styles/classifies.module.css";


const Row = ({  children }) => {
  return (
    <div className='col-lg-12' >
      
          <div className='row'>
    {children}
    </div>
    </div>
  );
};

export default Row;
