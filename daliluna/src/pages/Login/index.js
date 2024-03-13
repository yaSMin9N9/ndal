import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
function Login() {
  const { t } = useTranslation('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
   const router =useRouter()
const handleLogin = async (e) => {
  try{
    let data = new FormData();
    data.append("email", email);
    data.append("password", password);
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: process.env.API_URL + '/login',
      headers: { 
        'Accept': 'application/json', 
        'Accept-Language': 'en', 
        'country': 'SY', 
      },
      data: data
    };
    
    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        console.log(response.data.data.token);
        const token =response.data.data.token;
        localStorage.setItem("token",token)
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
    
  }catch(error){
    console.log(error)
  }
  
};


  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <div className="breadcrumb-bar">
        <div className="container">
          <div className="row align-items-center text-center">
            <div className="col-md-12 col-12">
              <div className="login-content">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 col-lg-5 mx-auto">
                      <div className="login-wrap" style={{ color: "#666", background: "#fff", maxWidth: "425px", margin: "0 auto" }}>
                        <div className="login-header">
                          <h3 style={{
                            fontSize: "30px",
                            fontWeight: "800",
                            color: " #0d233e",
                            margin: " 0 0 15px"
                          }}>{t('login')}</h3>
                          <p>{t("enter")}</p>
                        </div>
                        <div >
                          <div className="form-group group-img">
                            <div className="group-img" style={{ marginBottom: "20px" }}>
                              <input
                                type="email"
                                name="email"
                                placeholder={t("email")}
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="pass-group group-img">
                              <input
                                type="password"
                                name="password"
                                placeholder={t("password")}
                                className="form-control pass-input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                              />
                            </div>
                          </div>
                          <button className="btn btn-primary w-100 login-btn" style={{ marginTop: "20px", backgroundColor: "#b31313" }} onClick={handleLogin}>{t("login")}</button>
                          {error && <p style={{ color: 'red' }}>{error}</p>}
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
    </div>
  );
}

export default Login;
