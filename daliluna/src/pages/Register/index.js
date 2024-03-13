import { useEffect, useState } from "react";
import style from "./Register.module.css"
import axios from "axios";
import useTranslation from 'next-translate/useTranslation';
import { IoAddCircleOutline } from "react-icons/io5";
import { useRouter } from "next/router";
function Register() {
  const { t } = useTranslation('register');
  const [data, setData] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [birthday, setBirthday] = useState('');
  const [cityId, setCityId] = useState('');
  const [incomeTax, setIncomeTax] = useState('');
  const [contractSigned, setContractSigned] = useState(null);
  const [attachments, setAttachments] = useState(new Array(data.length).fill({}));
  const [formdata,setFormdata]=useState(null)
  const router =useRouter()
  const getLabelAlignment = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem("lan") === 'ar' ||"fa" ? style['right-label'] : style['left-label'];
    } else {
      // Default alignment if localStorage is not available (e.g., SSR environment)
      return style['left-label'];
    }
  };
  const handleClick = () => {
    const newAttachment = { attachments_name: "", file: null };
    setData([...data, newAttachment]);
  };
  const handleInputChange = (e, i) => {
    const { name, value } = e.target;
    const updatedData = [...data];
    updatedData[i] = {
      ...updatedData[i],
      attachments_name: value  // Ensure the correct property name
    };
    setData(updatedData);
  };
  
  const handleFileChange = (e, i) => {
    const file = e.target.files[0];
    const updatedData = [...data];
    updatedData[i] = {
      ...updatedData[i],
      file: file
    };
    setData(updatedData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("password_confirmation", passwordConfirmation);
    formData.append("city_id", selectedPro);
    formData.append("name", name);
    formData.append("income_tax", incomeTax);
    formData.append("birthday", birthday);
    formData.append("contract_signed", contractSigned);
    formData.append("role", "affiliate");
    
    data.forEach((item, i) => {
      formData.append(`attachments[${i}][name]`, item.attachments_name);
      formData.append(`attachments[${i}][file]`, item.file);
    });
   
setFormdata(formData)
    try {
      const response = await axios.post(process.env.API_URL + '/register', formData, {
        headers: {
          'Accept-Language': 'en',
          'country': 'syr'
        },
      });
      console.log('Registration successful!', response.data);
      console.log(JSON.stringify(response.data));
      console.log(response.data.data.token2);
      const token2 =response.data.data.token;
      localStorage.setItem("token2",token2)
      router.push("/");
    } catch (error) {
      console.error('Error during registration:', error);
      // Handle error (show an error message, retry logic, etc.)
    }
  };

  const [selectedPro,setSelectedPro]=useState([])
  const [countries, setCountries] = useState([]);
const [selectedCountry, setSelectedCountry] = useState('');
const [selectedProvince, setSelectedProvince] = useState('');
const [provinces,setProvinces]= useState([])
const[pro,setPro]=useState([])
useEffect(() => {
  const fetchCountries = async () => {
    try {
      const response = await axios.get(`${process.env.API_URL}/countries`, {
        headers: {
          'Accept': 'application/json',
          'Accept-Language': localStorage.getItem("lan"),
          'country': 'SYR'
        }
      });
      setCountries(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  fetchCountries();
}, []);

const handleCountrySelection = async (event) => {
  const countryCode = event.target.value;
  setSelectedCountry(countryCode);

  try {
    const response = await axios.get(`${process.env.API_URL}/countries/${countryCode}/provinces`, {
      headers: {
        'Accept': 'application/json',
        'Accept-Language': localStorage.getItem("lan"),
        'country': 'SYR'
      }
    });
    setProvinces(response.data.data);
  } catch (error) {
    console.log(error);
  }
};

const handleProvinceSelection = async (event, countryCode) => {
  const selectedProvinceCode = event.target.value;
  setSelectedProvince(selectedProvinceCode);
  try {
    const response = await axios.get(`${process.env.API_URL}/countries/3/provinces/34/cities`, {
      headers: {
        'Accept': 'application/json',
        'Accept-Language': localStorage.getItem("lan"),
        'country': 'SYR'
      }
    });

    const fetchedCities = response.data.data; 
    setPro(fetchedCities); 
    console.log(fetchedCities);
  } catch (error) {
    console.log(error);
  }
};

//////////////////////////////////
const handleprev =()=>{
  setSelectedPro(selectedProvince)
  console.log(selectedProvince)
}

 
  return (
    <div> <div style={{position:"relative"}}>
    <div className="breadcrumb-bar" >

  <div className="row align-items-center text-center">
    <div className="col-md-12 col-lg-12">
    <div className="login-content" >
<div className="container">
<div className="row">
    <div className="col-md-6 col-lg-9 mx-auto"  >
      <div className="login-wrap" >
        <div className="login-header">
          <h3 style={{fontWeight:"bolder",margin:"10px"}}>{t("reg")}</h3>
        </div>
        <form onSubmit={handleSubmit} >
        <div className="form-group group-img">
            <div className="group-img">
              <i className="feather-mail" />
              <label className={getLabelAlignment()} for="cars">{t("fname")}</label>
              <input name="first_name"
          value={firstName}
          onChange={(e)=>{setFirstName(e.target.value)}} 
          type="text" className="form-control"
            />
            </div>
          </div>
          <div className="form-group group-img">
            <div className="group-img">
              <i className="feather-mail" />
              <label className={getLabelAlignment()} for="cars">{t("lname")}</label>
              <input type="text" className="form-control"  
              name="last_name"
              value={lastName}
              onChange={(e)=>{setLastName(e.target.value)}}/>
            </div>
          </div>
          <div className="form-group group-img">
            <div className="group-img">
              <i className="feather-mail" />
              <label className={getLabelAlignment()} for="cars">{t("uname")}</label>
              <input type="text" className="form-control"  
              name="name"
              value={name}
              onChange={(e)=>{setName(e.target.value)}}/>
            </div>
          </div>
          <div className="form-group group-img">
            <div className="group-img">
              <i className="feather-mail" />
              <label className={getLabelAlignment()} for="cars">{t("email")}</label>
              <input type="text" className="form-control"  name="email"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
          </div>
          <div className="form-group group-img">
            <div className="group-img">
              <i className="feather-mail" />
              <label className={getLabelAlignment()} for="cars">{t("mobile")}</label>
              <input type="text" className="form-control" name="phone"
              value={phone}
              onChange={(e)=>{setPhone(e.target.value)}} />
            </div>
          </div>
          <div className="form-group">
              <div className="pass-group group-img">
                <i className="feather-lock" />
                <label className={getLabelAlignment()} for="cars">{t("Password")}</label>
                <input type="password" className="form-control pass-input"  name="password"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}/>
                <span className="toggle-password feather-eye" />
              </div>
            </div>
            <div className="form-group">
              <div className="pass-group group-img">
                <i className="feather-lock" />
                <label className={getLabelAlignment()} for="cars">{t("Confirm")}</label>
                <input type="password" className="form-control pass-input" 
                name="password_confirmation"
                value={passwordConfirmation}
                onChange={(e)=>{setPasswordConfirmation(e.target.value)}}/>
                <span className="toggle-password feather-eye" />
              </div>
            </div>
            <div className="form-group group-img">
            <div className="group-img">
              <i className="feather-mail" />
              <label className={getLabelAlignment()} for="cars">{t("tax")}</label>
              <input type="text" className="form-control" 
              name="income_tax"
              value={incomeTax}
              onChange={(e)=>{setIncomeTax(e.target.value)}}/>
            </div>
          </div>
          <div className="form-group">
            <div className="pass-group group-img" >
            <label className={getLabelAlignment()} >{t("Birthday")}</label>
             <input type="date"className="form-control" id="birthday" name="birthday"
             value={birthday}
             onChange={(e)=>{setBirthday(e.target.value)}}/>
            </div>
          </div>

          <div style={{marginTop:"20px"}}>
          <div className="form-group">
            <div className="pass-group group-img"  style={{display:"flex",justifyContent:"space-between", alignItems:"center"}}>
            <label className={getLabelAlignment()} for="cars">{t("Country")}</label>
            <select
      value={selectedCountry}
      onChange={handleCountrySelection}
      style={{
        padding: '8px',
        marginBottom: '8px',
        width: '250px',
        borderRadius: '10px'
      }}
    >
      <option value="">{t("SC")}</option>
      {countries.map((country, index) => (
        <option key={index} value={country.id}>
          {country.name}
        </option>
      ))}
    </select>
            </div>
          </div>
          <div style={{marginTop:"20px"}} className="form-group">
            <div className="pass-group group-img" style={{display:"flex",justifyContent:"space-between", alignItems:"center"}}>
            <label className={getLabelAlignment()} for="cars">{t("Province")}</label>
            <select
      value={selectedProvince}
      onChange={handleProvinceSelection}
      style={{
        padding: '8px',
        marginBottom: '8px',
        width: '250px',
        borderRadius: '10px'
      }}
    >
      <option value="">{t("SP")}</option>
      {provinces.map((province, index) => (
        <option key={index} value={province.id}>
          {province.name}
        </option>
      ))}
    </select>
            </div>
          </div>
          <div style={{marginTop:"20px"}} className="form-group">
            <div className="pass-group group-img" style={{display:"flex",justifyContent:"space-between", alignItems:"center"}}>
            <label className={getLabelAlignment()} for="cars">{t("City")}</label>
            <select
      value={selectedPro}
name="city"
      onChange={handleprev}
      style={{
        padding: '8px',
        marginBottom: '8px',
        width: '250px',
        borderRadius: '10px'
      }}
    >
      <option value="">{t("SCC")}</option>
      {pro.map((country, index) => (
        <option key={index} value={country.id}>
          {country.name}
        </option>
      ))}
    </select>
            </div>
            <div>
              <div style={{display:"flex",justifyContent:"space-between",marginTop:"20px",marginBottom:"20px"}}>
                <h6 style={{color:"#0d233e",fontWeight:"bold"}}>{t("attachments")}</h6>
                <IoAddCircleOutline  onClick={handleClick} style={{fontSize:"30px",color:"#0d233e"}}/>
              </div>
              {data.map((val, i) => (
  <div key={i} style={{ display: "flex", justifyContent: "space-between" }} >
    <input
      name={`attachments[${i}][name]`}
      type="text"
      placeholder="name"
      value={val.attachments_name}  
      onChange={(e) => handleInputChange(e, i)}  
    />
    <input
      name={`attachments[${i}][file]`}
      type="file"
      onChange={(e) => handleFileChange(e, i)}  
    />
  </div>
))}




            </div>
            <div style={{display:"flex", justifyContent:"space-between" ,marginTop:"20px",marginBottom:"20px"}}>
               <h6 style={{color:"#0d233e",fontWeight:"bold"}}>{t("contract")}</h6>
            <button style={{padding:"2px 20px", backgroundColor:"#b31411",color:"#fff",fontWeight:"bolder",borderRadius:"5px", border:"none"}}>{t("show")}</button>
            </div>
            
              <h6 style={{color:"#0d233e",fontWeight:"bold",marginBottom:"10px",display:"flex",justifyContent:"start"}}>{t("The")}</h6>
              <input name="contract_signed" onChange={(e) => setContractSigned(e.target.files[0])} style={{display:"flex",justifyContent:"start", marginBottom:"20px"}} type="file"  />
              <div style={{display:"flex",justifyContent:"space-between"}}>
              <h6 style={{color:"#0d233e",fontWeight:"bold",marginBottom:"10px"}}>{t("are")}</h6>
              <input  className={style["input"]} style={{fontSize:"50px"}} type="checkbox"/> 
              </div>
          
          </div>
          </div>
          <div className="row">
          </div>
          <button className="btn btn-primary w-100 login-btn" style={{backgroundColor:"#b31313"}} type="submit">Sign in</button>
        </form>
      </div>
    </div>
  </div>
</div>
</div>
    </div>
  </div>

</div>


  </div></div>
  )
}

export default Register