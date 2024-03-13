import React, { useState } from 'react';
import { IoIosWarning } from "react-icons/io";
import  Link  from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { useRouter } from 'next/router';

function Private() {
    const [isChecked, setIsChecked] = useState(false);
    const router =useRouter()
    const {Add}= router.query
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked); // Update checkbox state when clicked
    };
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-12  col-md-6 text-center" style={{marginTop:"50px"}}>
                    <IoIosWarning style={{ fontSize: "200px", color: "#b31313" }} />
                    <h1 className="font-weight-bold mt-3" style={{fontWeight:"bolder"}}>Information</h1>
                    <div className="text-left" style={{fontWeight:"bold"}}>
                        <h5>Talking about politics or religion is strictly prohibited. It is strictly forbidden to insult any person.The writer bears responsibility for any scientific or legal errors that may appear in the article if the site is subjected to any criticism.</h5>
                                            </div>
                    <div className="text-danger font-weight-bold d-flex align-items-center justify-content-center mt-3">
                        <label className="d-flex align-items-center">
                            <span className="mr-2 font-weight-bold" style={{fontWeight:"bold",fontSize:"20px",color:"#b31313"}}>Accept?</span>
                            <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                                style={{ width: '20px', height: '20px' }}
                            />
                        </label>
                    </div>
                    <div className="text-center mt-4" style={{display:"flex",alignItems:"center",justifyContent:"end"}}> 
                        <button className="btn btn-primary mr-2" style={{marginRight:"10px",backgroundColor:"#2b294e"}}>Back</button>
                        <button className="btn btn-danger" style={{backgroundColor:"#b31313"}}><Link href={`/addNewPost/${Add}`}  className="text-white">Continue</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Private;
