import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FakeStoreAPI_BaseURL } from "../../API/EndPoint";
import ProductCard from "../../Components/Product/ProductCard";
import classes from "./Result.module.css";
import Loader from "../../Components/Loader/Loader";
const Results = () => {
  const { categoryName } = useParams();
  const [results, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState();
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${FakeStoreAPI_BaseURL}/products/category/${categoryName}`)
      .then((res) => {
        //console.log(res);
        setResult(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.products_container}>
            {results?.map((product) => (
              <ProductCard
                key={product.id}
                products={product}
                detailDescription={false}
                buttonExist={true}
              />
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
};
export default Results;
