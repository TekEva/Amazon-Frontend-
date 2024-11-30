import React from "react";
import { redirect, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Auth from "../Pages/Auth/Auth";
import Payment from "../Pages/Payment/Payment";
import Order from "../Pages/Order/Order";
import ProuductDetail from "../Pages/ProuductDetail/ProuductDetail";
import LandingPage from "../Pages/LandingPage/LandingPage";
import Cart from "../Pages/Cart/Cart";
import Results from "../Pages/Results/Results";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "../Components/ProtectRoute/ProtectedRoute";

const stripePromise = loadStripe(
  "pk_test_51QOBZF00iTjoBer6JL0C9RRW3xwvus3yZaHrjjFqNn1r7FHVNrNyg4TlS187V6qu2Oeonf7amO45lTb0ydQWSE9P00xeUEcUFO"
);

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payments"
          element={
            <ProtectedRoute msg={"you must login to pay"} redirect={"/payments"}>
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route
          path="/order"
          element={
            <ProtectedRoute msg={"you must login to access your orders"} redirect={"/order"}>
             
                <Order />
              
            </ProtectedRoute>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProuductDetail />} />
      </Routes>
    </Router>
  );
};

export default Routing;
