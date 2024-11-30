import React from 'react'
import classes from "./Category.module.css"
import { Link } from 'react-router-dom';


const SingleCategory = ({data}) => {
  //console.log(data);
  return (
    <div className={classes.singlecategory}>
      <Link to ={`/category/${data.name}`}>
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt={data.name} />
        <p>shop now</p>
      </Link>
    </div>
  );
}

export default SingleCategory