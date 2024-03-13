import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import CountryContext from '../context/countryContext';
import useTranslation from 'next-translate/useTranslation';
const CountrySelector = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [error, setError] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const { country, setCountry } = useContext(CountryContext); // Access the context function
  const context =useContext(CountryContext)
  const { t } = useTranslation('common');
  useEffect(() => {
    const fetchCountries = async () => {
      try {
    
        const response = await axios.get(process.env.API_URL+'/countries', {
          headers: {
            'Accept': 'application/json',
            'Accept-Language': localStorage.getItem("lan"),
            'country': 'SYR'
          }
        });
        console.log(response.data.data.code);
        setFilteredCountries(response.data.data);
      } catch (error) {
        console.log(error);
        setError('Error fetching countries');
      }
    };
    fetchCountries();
  }, []);

  const handleCountrySelection = (countryCode) => {
    const selected = filteredCountries.find(country => country.code === countryCode);

    if (selected) {
      setSelectedCountry(selected);
      setError(null);
    } else {
      setError('Country not found');
      setSelectedCountry(null);
    }
  };

  const handleSelectChange = (event) => {
    const countryCode = event.target.value;
    handleCountrySelection(countryCode);
    console.log(countryCode)
    setCountry(countryCode)
  };

  return (
    <div>
      <select
        value={selectedCountry ? selectedCountry.code : ''}
        onChange={handleSelectChange}
        style={{
          padding: '8px',
          marginBottom: '8px',
          width: '250px',
          borderRadius: '10px'
        }}
      >
        <option value="">{t("concountry")}</option>
        {filteredCountries.map((country, index) => (
          <option key={index} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
      
    </div>
  );
};

export default CountrySelector;
