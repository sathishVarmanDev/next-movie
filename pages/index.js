import Header from "./components/Header"
import Hero from "./components/Hero";
import React, { useState, useContext } from "react"
import Provider from "../context/provider";

export default function Home() {
  const [isSearching, setIsSearching] = useState(false)
  return (
    <Provider
      value={isSearching}
    >
      <div>
        <Header
          setIsSearching={setIsSearching}
        />
        <Hero />
      </div>
    </Provider>
  )
}