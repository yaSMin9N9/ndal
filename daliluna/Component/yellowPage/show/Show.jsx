import React from 'react'
import { BiSolidMessageSquareDetail } from 'react-icons/bi'
import { GoDotFill } from 'react-icons/go'
import useTranslation from 'next-translate/useTranslation';
function Show({show}) {
  const { t } = useTranslation('common');
  return (
    <div>
            <div className="card " style={{marginTop:"50px"}}>
          <div className="card-header">
            <span className="bar-icon">
              <span />
              <span />
              <span />
            </span>
            <h4><BiSolidMessageSquareDetail style={{marginRight:'10px'}}/>{t("who")}</h4>
          </div>
          <div className="card-body">
            <p>Daliluna is a website and an application that includes all public authorities in addition to all commercial, tourist, services, and industrial establishments that are of importance to the citizens. It aims to make it easier for them to contact with these establishments via all possible ways which save time and money like providing information about the locations, phone numbers, and emails. It is noteworthy to mention that Daliluna does not get paid for any of these services: . Inserting information about an establishment.</p>
          </div>
          <div>
          <div style={{marginTop:"20px",margin:"20px 0px 10px 0px",display:"flex"}}>
            
            <h5><GoDotFill  style={{color:"#0d233e",margin:"0px 10px"}}/>Name:</h5>
            <p style={{marginLeft:"10px"}}>{show.name}</p>
          </div>
          
          </div>
          <div>
          <div  style={{marginTop:"20px",margin:"20px 0px 10px 0px",display:"flex"}}>
           
            <h5> <GoDotFill style={{color:"#0d233e",margin:"0px 10px"}}/>Time Open:</h5>
            <p style={{marginLeft:"10px"}}>{show.time_open}</p>
          </div>

          </div>
        </div>
    </div>
  )
}

export default Show