import React from 'react'
import {categoryData} from "./CategoryData"
import SingleCategory from './SingleCategory'
import classes from './Category.module.css'

const Category = () => {
  return (
    <div className={ classes.category__container}>
      {categoryData.map((info, id) => {
        return <SingleCategory key={id} data={info} />;
      })}
    </div>
  );
}

export default Category