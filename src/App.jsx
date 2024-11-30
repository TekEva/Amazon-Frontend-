import "./App.css";
import CarousleEffect from "./Components/Carousle/CarousleEffect";
import Header from "./Components/Header/Header";
import Category from "./Components/Category/Category";
import Product from "./Components/Product/Product";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Routing from "./Routes/Routing";
import { Type } from "./Utility/action.type";
import { auth } from "./Utility/firebase";
import { DataContext } from "./Components/DataProvider/DataProvider";
import { useContext, useEffect } from "react";

function App() {
  const [{user} , dispatch] = useContext(DataContext)
  useEffect(()=>{
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
    }, [])

  return (
    <>
      <Routing />
    </>
  );
}

export default App;
