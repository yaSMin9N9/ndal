import React, { Suspense, lazy, useCallback, useContext, useState, useEffect } from 'react';
import Image from 'next/image';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import styles from './Navbar.module.css';
import LazyLoad from 'react-lazy-load';
import CountrySelector from '../../Component/CountrySelector';
import LanguageSelector from '../../Component/LanguageSelector';
import useTranslation from 'next-translate/useTranslation';
import logo from './Daliluna.png';
import Button from '../../Component/ui/Button';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavbarM = () => {
  const [activeLink, setActiveLink] = useState('');
  const [navbarVisible, setNavbarVisible] = useState(false);
  const { t } = useTranslation('common');
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedIn2, setIsLoggedIn2] = useState(false); 
  useEffect(() => {
    const token = localStorage.getItem('token');
    const token2 = localStorage.getItem('token2');
    setIsLoggedIn(!!token); 
    setIsLoggedIn2(!!token2); 
  }, [isLoggedIn,isLoggedIn2]);

  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);
  const toggleNavbarVisibility = () => {
    setNavbarVisible(!navbarVisible);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('token2');
    setIsLoggedIn(false); 
    setIsLoggedIn2(false)
  };

  return (
    <>
      <Container className="col-lg-12" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Navbar expand="lg" className={styles[`header-nav ${navbarVisible ? 'show' : ''}`]}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Navbar.Brand className="col-lg-1">
              <LazyLoad>
                <Image src={logo} width={75} height={75} loading="lazy" className={styles['img-fluid']} alt="Logo" />
              </LazyLoad>
            </Navbar.Brand>
            <Navbar.Toggle onClick={toggleNavbarVisibility} aria-controls="basic-navbar-nav">
              <FaBars style={{ color: '#b31313' }} />
            </Navbar.Toggle>
          </div>
          <Navbar.Collapse className={styles['header-navv']} id="basic-navbar-nav">
          <Nav className="col-lg-4 " style={{ textDecoration: 'none' }}>
              <Link href="/" className={`${styles['format']} ${activeLink === '/' ? styles.activeLink : ''}`} style={{ marginRight: '10px', textDecoration: 'none', fontWeight: 'bold' }}>
                {t('home') || 'home'}
              </Link>
              <Link href="/AboutUs" className={`${styles['format']} ${activeLink === '/AboutUs' ? styles.activeLink : ''}`} style={{ marginRight: '10px', marginLeft: '10px', textDecoration: 'none', fontWeight: 'bold' }}>
                {t('aboutus') || 'aboutus'}
              </Link>
              <Link href="/contact" className={`${styles['format']} ${activeLink === '/contact' ? styles.activeLink : ''}`} style={{ textDecoration: 'none', fontWeight: 'bold', border: 'none' }}>
                {t('contact') || 'contact'}
              </Link>
            </Nav>
            <div className="col-lg-4" style={{ marginTop: '10px' }}>
              <Suspense fallback={<div>loading ..</div>}>
                <CountrySelector />
              </Suspense>
            </div>
            <Nav className="col-lg-3">
              {isLoggedIn ? ( 
                <>
                <Link href={'/Dashboard'} style={{color:"#000", fontWeight: 'bold', textDecoration: 'none', margin: '10px', marginTop: '15px' }}>
                 {t('Dashboard')}
                  </Link>
                  {isLoggedIn || isLoggedIn2 &&
                <Button style={{ fontSize: '15px', margin: '10px', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold', backgroundColor: '#b31313', color: '#fff', padding: '7px 30px' }} onClick={handleLogout}>
                 {t("Logout")}
                </Button>}
                </>
              ) : (
                <>
                  <Link href={'/Register'} style={{ fontWeight: 'bold', textDecoration: 'none', margin: '10px', marginTop: '15px' }} className={styles['header-reg']}>
                    {t('register') || 'register'}
                  </Link>
                  <Link href={'/Login'} className={styles['header-login']} style={{ fontSize: '15px', margin: '10px', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold', backgroundColor: '#b31313', color: '#fff', padding: '7px 30px' }}>
                    {t('login') || 'login'}
                  </Link>
                </>
              )}
              <div className={styles['Language']} style={{ backgroundColor: '#2b294e', margin: '10px', borderRadius: '5px', color: '#fff', padding: '7px', fontWeight: 'bold' }}>
                <LanguageSelector />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
};

export default NavbarM;
