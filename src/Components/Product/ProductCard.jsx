import React, { useContext } from "react";
import classes from "./product.module.css";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormatter/CurrencyFormatter";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

const ProductCard = ({ products, flex, detailDescription , buttonExist }) => {
  // const {image, title, id, rating, price} = products
  const { image, title, id, rating, price, description } = products;
//console.log(products);
const [state, dispatch]=useContext(DataContext)
//console.log(state);
const addToCart = ()=>{
  dispatch({
    type:Type.ADD_TO_BASKET,
    item:{
      image, title, id, rating, price, description
    }
  })
}

  return (
    <div
      className={`${classes.card__container} ${
        flex ? classes.product__flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" className={classes.img_container} />
      </Link>

      <div>
        <h3>{title}</h3>
        {detailDescription && (
          <div style={{ maxWidth: "750px" }}>{description}</div>
        )}
        <div className={classes.rating}>
          {/* rating */}
          <Rating value={rating?.rate || 0} precision={0.1} />
          {/*count  */}
          <small>{rating?.count}</small>
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>
        {buttonExist && (
          <button className={classes.button} onClick={addToCart}>
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
