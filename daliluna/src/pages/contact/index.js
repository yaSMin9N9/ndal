import axios from 'axios';
import React, { useEffect, useState } from 'react'
import im from "./conn.jpg"
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation'

function index() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [comment, setComment] = useState('');
  const [formError, setFormError] = useState('');
  const { t } = useTranslation('contact');
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !comment) {
      setFormError('Please fill in all required fields.');
      return;
    }
    setFormError('');
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("comment", comment);
    
    try {
     const res = await axios.post(
      process.env.API_URL + '/client-messages',formData,{
          headers:{
            'Accept': 'application/json',
            'Accept-Language': localStorage.getItem("lan"),
            'country': 'SY',
          }
        }
       
      );
      console.log(res);
      console.log(formError);
      // Reset form fields after successful submission
      setName('');
      setEmail('');
      setSubject('');
      setComment('');
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <div style={{marginTop:"120px"}}>
  <section className="contactusform-section">
    <div className="container">
      <div className="contact-info">
        <h2 style={{color:"#0d233e",fontSize:"75px",fontWeight:"bold"}}>{t('contentUs')}</h2>
        <p style={{marginLeft:"50px"}}>{t("help")}</p>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-5 col-md-5">
          <div className="contactform-img">
            <Image src={im} width={500} height={200} className="img-fluid" alt="11" />
          </div>
        </div>
        <div className="col-lg-7 col-md-7">
          <div className="contactus-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
              {formError && <p style={{ color: 'red' }}>{formError}</p>}
                <input type="text"
            value={name}
            onChange={(e)=> setName(e.target.value)}
             className="form-control" 
             style={{marginBottom:"15px"}} 
             placeholder={t("name")} required />
              </div>
              <div className="form-group me-0">
                <input 
            value={email}
            onChange={(e)=> setEmail(e.target.value)} type="email" 
            className="form-control" style={{marginBottom:"15px"}}
             placeholder={t("email")} required />
              </div>
              <div className="form-group">
                <input 
            value={subject}
            onChange={(e)=>setSubject(e.target.value)} type="text" 
            className="form-control" style={{marginBottom:"15px"}}
             placeholder={t("subject")} />
              </div>
              <div className="form-group">
                <textarea 
            value={comment}
            onChange={(e)=> setComment(e.target.value)} rows={4}
             className="form-control" style={{marginBottom:"15px"}}
              placeholder={t("write")} required defaultValue={""} />
              </div>
              <div className="submit-section" style={{ display: "flex", justifyContent: "end" }}>
  <button style={{ backgroundColor: "#b31411", padding: "10px 50px", borderRadius: "10px", color: "#fff", border: "none" }} type="submit">
    {t("submit")}
  </button>
</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}

export default index