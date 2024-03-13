import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { appWithTranslation, useTranslation } from 'next-i18next'
import Layout from '../../layout/layout'
import CountryContext from '../../context/countryContext'
import { useEffect, useState } from 'react'
import LanguageContext from '../../context/languageContext'
import { Router, useRouter } from 'next/router'
import NProgress from "nprogress";
import 'nprogress/nprogress.css';
const App = ({ Component, pageProps }) => {
  const [country, setCountry] = useState("SYR")
  const [language, setLanguage]=useState("ar")
  
  const router = useRouter();

  let canonical = '';
  if (typeof window !== "undefined") {
    canonical = window.location.href;
  }
  useEffect(() => {
    let dir = router.locale === "ar" || router.locale === "fa" ? "rtl" : "ltr";

    document.querySelector("html").setAttribute("dir", dir);
    document.querySelector("html").setAttribute("lang", router.locale);
    console.log(router.locale)
  }, [router.locale])
  NProgress.configure({
    showSpinner: false,
    trickleRate: 0.1,
    trickleSpeed: 300,
    easing: 'ease',
    speed: 500,
  });

  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });

  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });

  Router.events.on('routeChangeError', () => {
    NProgress.done();
  });
  return (
   
    <LanguageContext.Provider value={{language,setLanguage}}>
    <CountryContext.Provider value={{ country, setCountry }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CountryContext.Provider>
    </LanguageContext.Provider>
    
  )
}

export default appWithTranslation(App)
