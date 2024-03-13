import React from 'react'
import { IoPersonSharp } from 'react-icons/io5'
import useTranslation from 'next-translate/useTranslation';
function Show2({show}) {
  const { t } = useTranslation('common');
  return (
    <div>
         <div className="card " style={{marginTop:"50px"}}>
          <div className="card-header">
            <i className="feather-list" />
            <h4><IoPersonSharp style={{marginRight:"10px"}}/>{t("personal")}</h4>
          </div>
          <div className="card-body">
            <div className="lisiting-featues">
              <div className="row">
              <div className="map-details">
              
              <ul className="info-list">
              <div className='row' style={{display:"flex" ,alignItems:"center",justifyContent:"space-around"}}>
              <div className="col-lg-6 col-md-6">
                    <div className="form-group formlast-input">
                      <label style={{fontWeight:"bold",marginRight:"20px"}} className="col-form-label"  >{t("email")}</label>
                      <label className="col-form-label"  >{show.email}</label>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group formlast-input">
                      <label style={{fontWeight:"bold",marginRight:"20px"}} className="col-form-label"  >{t("address")}</label>
                      <label className="col-form-label"  >{show.address}</label>
                    </div>
                  </div>
              </div>
              <div className='row' style={{display:"flex" ,alignItems:"center",justifyContent:"space-around"}}>
              <div className="col-lg-6 col-md-6">
                    <div className="form-group formlast-input">
                      <label style={{fontWeight:"bold",marginRight:"20px"}} className="col-form-label"  >{t("mobile1")}</label>
                      <label className="col-form-label"  >0936276618</label>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group formlast-input">
                      <label style={{fontWeight:"bold",marginRight:"20px"}} className="col-form-label"  >{t("mobile2")}</label>
                      <label className="col-form-label"  >0932648804</label>
                    </div>
                  </div>
              </div>
              </ul>
            </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Show2