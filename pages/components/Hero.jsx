import React, {useContext} from "react";
import playButton from "../../assets/images/play-button.png";
import {Context} from "../../context/context";
import SearchMovies from "./HeroComponents/SearchMovies";
import FindYourMovies from "./HeroComponents/FindYourMovies";


export default function Hero() {
    const isSearching = useContext(Context)

    return (
        <div className="hero-container min-vh-100 bg-primary">
            <div className="d-flex container">
                <div className="row hero-wrapper my-5 mx-auto">
                    {isSearching ? <SearchMovies /> : <FindYourMovies /> }
                </div>
            </div>
        </div>
    )   
}