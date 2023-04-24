import React from "react";

export const Navbar = () => {
    return (
        <div>    
            <nav className ="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container-fluid mx-md-5">
                    <a className="navbar-brand" href="#">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <div className="col-md-12">
                            <ul className="navbar-nav p-0 d-flex justify-content-end">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};
