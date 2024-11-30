import React, { useEffect, useContext, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { db } from "../../Utility/firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"; // Correct modular imports
import classes from "./Order.module.css";
import ProductCard from "../../Components/Product/ProductCard";

const Order = () => {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      // Access the "orders" collection within the user's document in Firestore
      const ordersRef = collection(db, "users", user.uid, "orders");
      const q = query(ordersRef, orderBy("created", "desc")); // Create query to order by 'created'

      // Listen for real-time updates with onSnapshot
      const unsubscribe = onSnapshot(q, (snapshot) => {
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id, // Document ID
            data: doc.data(), // Document data
          }))
        );
      });

      // Clean up the listener on component unmount
      return () => unsubscribe();
    } else {
      setOrders([]); // Clear orders if no user is logged in
    }
  }, [user]); // Re-run when user changes
  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.orders__container}>
          <h2>your orders</h2>
          {orders?.length === 0 && <div style={{padding: "15px"}}>you didn't make any order yet</div>}
          {/* ordered items */}
          <div>
            {orders?.map((eachOrder, i) => {
              return (
                <div key={i}>
                  <hr />
                  <p>Order iD: {eachOrder.id}</p>
                  {eachOrder?.data?.basket?.map((order, j) => (
                    <ProductCard flex={true} products={order} key={j} />
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Order;
