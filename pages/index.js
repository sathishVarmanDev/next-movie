import Header from "./components/Header"
import React, { useState, useContext, useEffect } from "react"
import Results from "./components/Results";
import Releases from "./components/Releases";
import Footer from "./components/Footer";
import { ContextProvider, Context } from "../context/context";

export default function Home() {

  const { isSearching } = useContext(Context)

  return (

      <div>
        <Header />
        {
          isSearching ? <Results /> : <Releases />
        }
        <Footer />
      </div>
  )
}