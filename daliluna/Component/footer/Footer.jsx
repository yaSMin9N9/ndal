import React from 'react'
import logo from "./Daliluna.gif"
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation';
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoCallSharp } from 'react-icons/io5';
import { MdSms } from 'react-icons/md';
import Link from 'next/link';

function Footer() {
  const { t } = useTranslation('common');
  return (
<div style={{zIndex:"9999",backgroundColor:"#000",color:"#fff"}}> <footer className="footer" >
  
    <div className="footer-top aos" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget">
              <div className="footer-logo">
                <Image src={logo} alt="logo" width={100} height={100}/>
              </div>
              <div className="footer-content">
                <p>{t('daliluna')}</p>
              </div>
          
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="footer-widget footer-menu">
              <h2 className="footer-title">{t("Aboutus")}</h2>
              <ul>
                <li>
                  <Link href="/">{t("home")}</Link>
                </li>
                <li>
                  <Link href="/AboutUs">{t("Aboutus")}</Link>
                </li>
                <li>
                  <Link href="/contact">{t("contact")}</Link>
                </li>
                <li>
                  <Link href="/login">{t("login")}</Link>
                </li>
                <li>
                  <Link href="/register">{t("register")}</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="footer-widget footer-menu">
              <h2 className="footer-title">{t("Quicklinks")}</h2>
              <ul>
                <li>
                  <Link href="/classify/67">{t("car")}</Link>
                </li>
                <li>
                  <Link href="/classify/74">{t("job")}</Link>
                </li>
                <li>
                  <Link href="/classify/94">{t("house")}</Link>
                </li>
                <li>
                  <Link href="/classify/112">{t("computer")}</Link>
                </li>
                <li>
                  <Link href="/classify/147">{t("book")}</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="footer-widget footer-menu">
              <h2 className="footer-title">{t("TopCities")}</h2>
              <ul>
                <li>
                  <a href="javascript:void(0)">Manhatten</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Los Angeles</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Houston</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Chicago</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Alabama</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget">
              <h2 className="footer-title">{t("Communication")}</h2>
              <div className="footer-contact-info">
                <div className="footer-address">
                <IoCallSharp style={{color:"#fff"}}/>
                  <p><span>{t("CallUs")}</span> <br /> +963993299301 </p>
                </div>
                <div className="footer-address">
                <MdSms  style={{color:"#fff"}}/>
                  <p><span>{t("SendMessage")}</span> <br /> info@daliluna.ltd
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footercount">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <div className="vistors-details">
                <p>{t("OurUniqueVisitor")}</p>
                <p className="visitors-value">25,329,532</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div>
                <p>{t("WeAccept")}</p>
                <ul className="d-flex" style={{listStyleType:"none"}}>
                  <li style={{marginRight:"10px"}}><FaWhatsapp style={{color:"white"}} /></li>
                  <li style={{marginRight:"10px"}}><FaFacebook style={{color:"white"}}/></li>
                  <li style={{marginRight:"10px"}}><FaInstagram style={{color:"white"}}/></li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  </footer>
</div>

  )
}

export default Footer