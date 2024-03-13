import React, { useEffect } from 'react';
import NavbarM from './navbar/Navbar';
import Footer from '../Component/footer/Footer';

const Layout = ({ children, value }) => {
   

  return (
    <>
      <NavbarM />
      <main>{children}</main>
      <Footer/>
    </>
  );
};

export default Layout;
