import Header from "./components/Header"
import React, { useState, useContext, useEffect } from "react"
import ResultsContainer from "./components/ResultsContainer";
import ReleasesContainer from "./components/ReleasesContainer";
import Footer from "./components/Footer";
import { ContextProvider, Context } from "../context/context";

export default function Home() {

  const { isSearching } = useContext(Context)
  console.log("isSearching index", isSearching);

  return (

    // <div className="container">
      <div className="postion-relative">
        <Header />
        {
        isSearching ? <ResultsContainer /> : <ReleasesContainer />
        }
        <Footer />
      </div>
      // </div>
  )
}