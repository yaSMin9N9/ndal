import React, { useContext, useEffect, useState } from 'react';
import LanguageContext from '../context/languageContext';
import { useRouter } from 'next/router';
import Link from "next/link";

const LanguageSelector = () => {
  const [language, setLanguage] = useState(typeof window !== 'undefined' ? localStorage.getItem("lan") : "ar");
  const router = useRouter();
  const direction = language === 'ar' || language === "fa" ? 'rtl' : 'ltr';

  const handleLanguageChange = (selectedLanguage) => {
    localStorage.setItem("lan", selectedLanguage);
    setLanguage(selectedLanguage);
  };

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await fetch("https://daliluna.ltd/api/site-languages", {
          headers: {
            'Accept': 'application/json',
            'Accept-Language': localStorage.getItem("lan"),
            'country': 'SYR'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch languages');
        }

        const data = await response.json();
        setLanguageOptions(data.data);
      } catch (error) {
        console.error(error);
        
      }
    };

    fetchLanguages();
},[])

  const [languageOptions, setLanguageOptions] = useState([]);

  return (
    <div dir={direction}>
      <Link href={router.asPath} locale={language}>
        <select
          style={{
            backgroundColor: "#2b294e",
            color: "#fff",
            border: "none",
            scrollbarWidth: "thin", // Set the width of the scrollbar
            scrollbarColor: "rgba(0, 0, 0, 0.5) rgba(255, 255, 255, 0.1)" // Set the color of the scrollbar
          }}
          value={language}
          onChange={(e) => {
            const selectedLanguage = e.target.value;
            handleLanguageChange(selectedLanguage);
          }}
        >
          <option value="">Select a language</option>
          {languageOptions.map((language, index) => (
            <option key={index} value={language.code}>{language.name}</option>
          ))}
        </select>
      </Link>
    </div>
  );
};

export default LanguageSelector;
