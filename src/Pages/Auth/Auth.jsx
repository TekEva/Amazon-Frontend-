import React, { useState, useContext } from "react";
import amazonlogoblack from "../../assets/images/logos/amazon-logo-black.jpg";
import classes from "./signup.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
import { CircleLoader } from "react-spinners";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [{ user }, dispatch] = useContext(DataContext);
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });
  const navigate = useNavigate();
  const stateData = useLocation();
  //console.log(stateData);

  //console.log(password, email);
  const authHandler = async (e) => {
    e.preventDefault();
    //console.log(e);
    console.log(e.target.name);
    //console.log(user);
    if (e.target.name == "SignIn") {
      setLoading({ ...loading, signIn: true });
      //start firebase authentication
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          //console.log(userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signIn: false });
          navigate(stateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setLoading({ ...loading, signIn: false });
          //console.log(err);
          //console.log(err.message);
          setError(err.message);
        });
    } else {
      setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          //console.log(userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signUp: false });
          navigate(stateData?.state?.redirect || "/");
        })
        .catch((err) => {
          //console.log(err);
          setError(err.message);
          setLoading({ ...loading, signUp: false });
        });
    }
  };
  return (
    <section className={classes.login}>
      {/* entry logo */}
      <Link to="/">
        <img src={amazonlogoblack} alt="authlogo" />
      </Link>

      {/* signin and signup form */}
      <div className={classes.login__container}>
        <h1>Sing In</h1>
        {stateData?.state?.msg && (
          <small
            style={{
              padding: "5px",
              textAlign: "center",
              color: "red",
              fontWeight: "bold",
            }}
          >{stateData?.state?.msg}</small>
        )}
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button
            className={classes.login__signInButton}
            type="submit"
            onClick={authHandler}
            name="SignIn"
            // disabled={loading.signIn}
          >
            {loading.signIn ? (
              <CircleLoader color="#000" size={15} />
            ) : (
              "  Sing In"
            )}
          </button>
        </form>
        {/* agreement text */}
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button
          className={classes.login__registerButton}
          type="submit"
          onClick={authHandler}
          name="SingUp"
          // disabled={loading.signUp}
        >
          {loading.signUp ? (
            <CircleLoader color="red" size={15} />
          ) : (
            "  create your amazon account"
          )}
        </button>
        {error && (
          <small style={{ padding: "5px", color: "red", fontSize: "20px" }}>
            {error}
          </small>
        )}
      </div>
    </section>
  );
};

export default Auth;
