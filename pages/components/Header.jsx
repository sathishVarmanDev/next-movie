import React, { useState, useContext } from "react"
import SearchIcon from '@mui/icons-material/Search';
import ellipse from "../../assets/images/ellipse.png";
import { Context } from "../../context/context";

export default function Header() {
    const { isSearching, setIsSearching } = useContext(Context)
    console.log("isSearching",isSearching);

    return (
        <div className="position-absolute" style={{ top: 0, left: 0, right: 0, backgroundColor: `transparent` }}>
        <nav className="navbar navbar-expand-lg bg-body-tertiary header">
            <div className="container-fluid">
                <a className="navbar-brand navbar__company-name" href="#">PcariMovie</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active nav-item__text" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Movies</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">TV Show</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Video</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">FAQ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact Us</a>
                        </li>
                    </ul>
                    <div className="d-flex justify-content-between align-items-center gap-3 right-nav">
                        <button className="cursor-pointer border-0" onClick={() => setIsSearching(!isSearching)}>
                            <SearchIcon />
                        </button>
                        <div className="d-flex justify-content-between align-items-center gap-1 right-nav__profile" href="#">
                            <img src={ellipse} alt="Logo" width="48" height="48" className="d-inline-block align-text-top profile__ellipse" />
                            <span className="profile__text">John Glich</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        </div>
    )
}
