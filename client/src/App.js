import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";

function App() {
  // const [data, setData] = useState(null);
  
  // useEffect(() => {
  //   const callBackendAPI = async () => {
  //     try {
  //       const response = await fetch("/api/v1/bicycles");
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch data");
  //       }
  //       const body = await response.json();
  //       setData(body.message);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   callBackendAPI();
  // }, []);

  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
