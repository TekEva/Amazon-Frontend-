import React, {useState, useEffect} from 'react';
import { FakeStoreAPI_BaseURL } from '../../API/EndPoint';
import classes from "./product.module.css"
import axios from 'axios';
import ProductCard from './ProductCard';
import Loader from '../Loader/Loader';

const Product = () => {
   const [products, setProducts] = useState();
   const [isLoading, setIsLoading] = useState()
   useEffect(() => {
    setIsLoading(true);
     axios
       .get(`${FakeStoreAPI_BaseURL}/products`)
       .then((res) => {
         setProducts(res.data);
         setIsLoading(false);
       })
       .catch((err) => {
         console.log(err);
         setIsLoading(false);
       });
   }, []);
   //console.log(products);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.products__container}>
          {products?.map((singleProduct) => {
            return (
              <ProductCard products={singleProduct} key={singleProduct.id} buttonExist={true}/>
            );
          })}
        </section>
      )}
    </>
  );
}

export default Product