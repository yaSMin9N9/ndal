import React, { useEffect } from 'react';

const Content = ({ data }) => {
  useEffect(()=>{
    console.log(data.content)
},[data])

  return (
    <div className='row'>
     {data && data.content &&Object.entries(data.content).map(([key, value]) => (
            <li className='col-lg-4 col-md-6' style={{listStyleType: 'none', marginBottom:"20px",backgroundColor:"#eee"}} key={key}>
              <strong>{value.classified_department_field_name}:</strong> {value.answer}
            </li>
          ))}
    </div>
  );
};

export default Content;
