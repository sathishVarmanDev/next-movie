import React, {useContext} from "react";
import {Context} from "../../context/context";


export default function Hero() {
    const { isSearching, newReleases } = useContext(Context)
    console.log("newReleases", newReleases?.data?.slice(0, 1));

    return (
        <div className="hero-container min-vh-100 min-vw-100" style={{
            backgroundImage: `url(${newReleases?.data?.slice(0,2)[1]?.Poster})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}>
            <div className="d-flex container" >
                <div className="row hero-wrapper my-5 mx-auto">
                    {isSearching ? <div>search movies</div> : <div>find movies</div> }
                </div>
            </div>
        </div>
    )   
}