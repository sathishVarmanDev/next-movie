import React, {useContext} from "react";
import {Context} from "../../context/context";


export default function Hero() {
    const { isSearching } = useContext(Context)
    console.log("isSearching hero", isSearching);

    return (
        <div className="hero-container min-vh-100 bg-primary">
            <div className="d-flex container">
                <div className="row hero-wrapper my-5 mx-auto">
                    {isSearching ? <div>search movies</div> : <div>find movies</div> }
                </div>
            </div>
        </div>
    )   
}