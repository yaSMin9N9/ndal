import React, { useContext, useState } from 'react'
import LanguageContext from '../../context/languageContext'
import CountryContext from '../../context/countryContext'

export const FetchApi = async({url}) => {
    const[categoryy,setCategoryy]=useState([])
    const context =useContext(LanguageContext)
    const con =useContext(CountryContext)
        try {
         
          const response = await axios.get(`https://daliluna.ltd/api${url}`, {
            headers: {
              'Accept': 'application/json',
              'Accept-Language': context.language,
              'country': con.country,
            }
          });
          console.log(response.data.data)
          console.log(con.country)
          setCategoryy(response.data.data);
        } catch (error) {
          console.log(error);
        }
      
  return (
    <div>
        {categoryy}
    </div>
  )
}
