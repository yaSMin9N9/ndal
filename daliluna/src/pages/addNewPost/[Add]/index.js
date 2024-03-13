import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import style from "./add.module.css"
import LanguageContext from '../../../../context/languageContext';
import index from '@/pages/AboutUs';
import useTranslation from 'next-translate/useTranslation'
import CountryContext from '../../../../context/countryContext';
function NewPost() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { Add } = router.query;
  const [data, setData] = useState([]);
  const context = useContext(CountryContext);
  const [selectedFile, setSelectedFile] = useState({});
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [facebook, setFacebook] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [mobile1, setMobile1] = useState('');
  const [mobile2, setMobile2] = useState('');
  const [mobile3, setMobile3] = useState('');
  const [files, setFiles] = useState([]);
  const con = context.country;
  const handleFileChange = (event) => {
    const fileList = event.target.files;
    setFiles(fileList);
  };
  const handleMobile1Change = (event) => {
    setMobile1(event.target.value);
  };

  const handleMobile2Change = (event) => {
    setMobile2(event.target.value);
  };
  const handleMobile3Change = (event) => {
    setMobile3(event.target.value);
  };
  const [formDataa, setFormDataa] = useState({
    content: [
     
    ]
  });
  
 
  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get(
          process.env.API_URL + `/classified-departments/${Add}/classified-department-fields`,
          {
            headers: {
              'Accept': 'application/json',
              'Accept-Language': localStorage.getItem("lan"),
              'country': 'SYR'
            },
          }
        );
        setData(response.data.data);
        const contentData = response.data.data.map(item => ({
          classified_department_field_id: item.id,
          classified_department_field_name: item.name,
          answer: '', // Initialize answer to an empty string
        }));

        setFormDataa(prevData => ({
          ...prevData,
          content: contentData,
        }));
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleCheckboxChange = (fieldName, value, event) => {
   
    const checked = event.target.checked;

    setFormDataa((prevData) => ({
      ...prevData,
      [fieldName]: checked
        ? [...(prevData[fieldName] || []), value]
        : (prevData[fieldName] || []).filter((item) => item !== value),
    }));
  };

  

  const handleInputChange = (e) => {
    const { name } = e.target;
    console.log("value",e.target.value);
    setFormDataa(prevData => ({
      ...prevData,
      content: prevData.content.map((item) =>
        item.classified_department_field_name === name
          ? { ...item, answer: e.target.value }
          : item
      ),
    }));
  };
  

  const handleButtonClick = async () => {
    
    const formDataToSend = new FormData();
    if(!selectedFile){
      console.log("no file choose");
    }
    if(selectedFile){
      console.log(selectedFile);
    }
    const mobiles= [
         {
          "number": mobile1,
          "name": "whats_app"
        },
        {
          "number": mobile2,
          "name": "call"
        },
         {
          "number": mobile3,
          "name": "telegram"
        }
      ]
      const mobilesFormData = [];

// Iterate over each mobile object and construct an array for FormData
mobiles.forEach((mobile, index) => {
  const mobileFormData = new FormData();
  mobileFormData.append(`mobiles[${index}][number]`, mobile.number);
  mobileFormData.append(`mobiles[${index}][name]`, mobile.name);
  mobilesFormData.push(mobileFormData);
});

// Append the mobilesFormData array to the main FormData object
mobilesFormData.forEach((formData) => {
  for (const [key, value] of formData.entries()) {
    formDataToSend.append(key, value);
  }
});
    
    // Append simple key-value pairs
    formDataToSend.append("name", name);
    
    formDataToSend.append("title","title");
    formDataToSend.append("city_id", 1);
    formDataToSend.append("currency_id", 1); 
    formDataToSend.append("email", email);
    formDataToSend.append("facebook", facebook);
    formDataToSend.append("address", address);
    formDataToSend.append("price", 200);
   
    for (let i = 0; i < files.length; i++) {
      formDataToSend.append(`images[${i}]`, files[i]);
    }
    

    const contentArray = [];
    for (let i = 0; i < formDataa.content.length; i++) {
      const item = {
        classified_department_field_id: i + 1,
        answer: formDataa.content[i]?.answer 
      };
      contentArray.push(item);
    }
  
      contentArray.forEach((item, index) => {
        formDataToSend.append(`content[${index}][classified_department_field_id]`, item.classified_department_field_id);
        formDataToSend.append(`content[${index}][answer]`, item.answer);
      });
    
    
    
    
    try {
      const response = await fetch(
        `https://daliluna.ltd/api/classified-departments/${Add}/posts`,
        {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Accept-Language': localStorage.getItem("lan"),
            'country': 'SYR'
          },
          body: formDataToSend,
        }
      );
    
      const responseData = await response.json();
    
      if (response.ok) {
        console.log("Data successfully posted:", responseData);
        console.log(formDataToSend);
      } else {
        console.error("Failed to post data:", responseData);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }}
  
  return (
<div><div className="main-wrapper" style={{marginTop:"100px"}}>
    
    <div className={style["breadcrumb-barr"]}>
      <div className="container" style={{paddingRight:"calc(var(--bs-gutter-x) * .5)",
         paddingLeft: "calc(var(--bs-gutter-x) * .5)"}}>
        <div className="row align-items-center text-center">
          <div className="col-md-12 col-12">
            <h2 className="breadcrumb-title" style={{color:"white"}}>{t("add")}</h2>
            <nav aria-label="breadcrumb" className="page-breadcrumb">
              
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div className="dashboard-content">
      <div className="container">
        
        <div className="profile-content">
          <div className={style["messages-form"]}>
          <div className={style["card"]}>
              <div className="card-header">
                <h3 style={{fontWeight:"bolder",marginBottom:"30px",display:"flex",alignItems:"center"}}><FaLocationDot />{t("personal")}</h3>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label className={style["col-form-label"]}>{t("name")}</label>
                  <input type="text" className="form-control pass-input"  name='name' value={name} onChange={(e)=>{setName(e.target.value)}} />
                </div>

                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="form-group formlast-input">
                      <label className={style["col-form-label"]}  >{t("mobile1")}</label>
                      <input  type="text"
  className="form-control select"
  id="mobile1"
  name="mobile1"
  placeholder='whatsapp'
  value={mobile1}
        onChange={handleMobile1Change}
   />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6" style={{marginBottom:"20px"}}>
                  <div className="form-group formlast-input">
                      <label className={style["col-form-label"]}>{t("mobile2")}</label>
                      <input type="text"
  className="form-control select"
  id="mobile2"
  name="mobile2"
  placeholder='telegram'
  value={mobile2}
        onChange={handleMobile2Change}
   />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="form-group formlast-input">
                      <label className={style["col-form-label"]}  >{t("mobile3")}</label>
                      <input  type="text"
  className="form-control select"
  id="mobile1"
  name="mobile1"
  placeholder='call'
  value={mobile3}
        onChange={handleMobile3Change}
   />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className={style["col-form-label"]}>{t("email")}</label>
                  <input type="text" className="form-control pass-input" 
                  name='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}  />
              
                </div>
                <div className="row">
                <div className="col-lg-6 col-md-6">
                      <label className={style["col-form-label"]}>Facebook</label>
                      <div className="pass-group group-img">
                        <span className="lock-icon"><i className="fab fa-facebook-f" /></span>
                        <input type="text" className="form-control" 
                        name='FaceBook' value={facebook} onChange={(e)=>{setFacebook(e.target.value)}}  />
                      </div>
                    </div>
                  <div className="col-lg-6 col-md-6" style={{marginBottom:"20px"}}>
                  <div className="form-group formlast-input">
                      <label className={style["col-form-label"]}>{t("address")}</label>
                      <input type="text" className="form-control select"
                       name='Address' value={address} onChange={(e)=>{setAddress(e.target.value)}} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={style["card"]}>
              <div className="card-header">
                <h3 style={{fontWeight:"bolder",marginBottom:"30px",display:"flex",alignItems:"center"}}><FaLocationDot />{t("post")}</h3>
              </div>
              <div className="card-body">
         
              <div className="row">
              {data?.map((item) =>
  item.type === 'text' && (
    <div className="col-lg-6 col-md-6" key={item.id}>
      <label className={style["col-form-label"]}>
        <GoDotFill color="grey" />
        {item.name}
      </label>
      <input
        name={item.name}
        style={{ marginLeft: '20px' }}
        value={formDataa[item.name]}
        onChange={(e) => handleInputChange(e)}
        maxLength={item.max_length}
        minLength={item.min_length}
        type={item.type}
        className="form-control pass-input"
        placeholder={item.placeholder !== null ? item.placeholder : ''}
      />
    </div>
  )
)}

     </div>
              </div>
            </div>
            <div className={style["card"]}>
              <div className="card-header">
                <h3 style={{fontWeight:"bolder",marginBottom:"30px",display:"flex",alignItems:"center"}}><FaLocationDot />{t("basic")}</h3>
              </div>
              <div className="card-body">
                <div className="row">
                 
                {data?.map((item) =>
  item.type === 'checkbox' && (
    <div key={item.name}>
      <label className={style["col-form-label"]}>{item.name}</label>
      {item.values.map((value) => (
        <div key={value}>
          <input
            type="checkbox"
            checked={formDataa[item.name] && formDataa[item.name].includes(value)}
            onChange={(e) => handleCheckboxChange(item.name, value, e)}
          />
          {value}
        </div>
      ))}
    </div>
  )
)}

                  </div>
                 
                </div>
            </div>
            <div className={style["card"]}>
              <div className="card-header">
                <h3 style={{fontWeight:"bolder",marginBottom:"30px",display:"flex",alignItems:"center"}}><FaLocationDot />{t("media")}</h3>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6 col-md-6 featured-img1">
                    <div className="media-image ">
                      <img src="assets/img/mediaimg-2.jpg" alt="kk" />
                    </div>
                    <div className="settings-upload-btn">
                      <input type="file" accept="image/*" multiple
        onChange={handleFileChange} name="image"className={style["custom-file-input"]} id="file" />
                      
                    </div>
                  </div>
                 
                </div>
            
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="progress-wrap active-progress" style={{display:"flex",justifyContent:"flex-end",margin:"50px"}}>
  <button class={style["button-30"]} onClick={handleButtonClick} role="button">{t("submit")}</button>

  </div></div>

  )
}

export default NewPost