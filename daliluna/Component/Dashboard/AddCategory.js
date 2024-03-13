"use client"
import React, { useState } from 'react';
import styles from './addCategory.module.css'; // Import the CSS Module
import { createCategory } from '@/redux/apiCalls/categoryApiCall';
import { useDispatch ,useSelector} from 'react-redux';

const AddCategory = () => {
  
  
  const [titl, setTitl] = useState('');
  const [file,setFile] =useState(null);
  const dispatch =useDispatch() 
  const formSubmitHandler = (e) => {
    
      e.preventDefault();
  
      const formData = new FormData();
      formData.append("image", file);
      formData.append("title", titl);
      
  
      dispatch(createCategory(formData));
      setTitl("")
      setFile(null)
  };

  return (
    <div className={styles.addCategory}>
      <h6 className={styles.addCategoryTitle}>Add New Book</h6>
      <form onSubmit={formSubmitHandler} className={styles.addCategoryForm}>
        <div className={styles.addCategoryFormGroup}>
          <label htmlFor="title"></label>
          <input
            type="text"
            id="title"
            placeholder="Enter Category Title"
            value={titl}
            onChange={(e) => setTitl(e.target.value)}
            className={styles.addCategoryInput}
          />
        </div>
        <input
          type="file"
          name="file"
          id="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        
        <button className={styles.addCategoryBtn} type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
