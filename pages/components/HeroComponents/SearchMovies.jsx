import React from 'react'

export default function SearchMovies() {
    return (
        <div>
            <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 hero-text mx-auto">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <h1 className="hero-text__heading">Search your movies here!</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-7 col-xl-7 mt-auto">
                        <div className="input-group mx-auto">
                            <span className="input-group-append">
                                <button className="btn ms-n5 disabled border border-0" type="button">
                                    <i className="fa fa-search"></i>
                                </button>
                            </span>
                            <input className="form-control border-end-0 border ps-5 search-input" type="search" placeholder="search" id="example-search-input" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-5 col-xl-5 mt-auto">
                        <div className="input-group date" id="datepicker">
                            <input type="text" className="form-control" id="date" />
                            <span className="input-group-append">
                                <span className="input-group-text bg-light d-block">
                                    <i className="fa fa-calendar"></i>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
