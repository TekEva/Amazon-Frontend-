import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FakeStoreAPI_BaseURL } from "../../API/EndPoint";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";

const ProductDetail = () => {
  const { productId } = useParams(); // Correctly fetch productId from params
  //console.log(productId);
  const [product, setProduct] = useState({}); 
  const [isLoading, setIsLoading] = useState()
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${FakeStoreAPI_BaseURL}/products/${productId}`) 
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []); 

/*   if (!product) {
    return <div>Loading...</div>; // Show loading while fetching data
  } */

  return (
    <Layout>
      {isLoading ? (<Loader/>): (<ProductCard products={product} flex = {true} detailDescription = {true} buttonExist={true}/>)}
    </Layout>
  );
};

export default ProductDetail;
