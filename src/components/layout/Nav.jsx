import { Fragment } from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import classes from './Nav.module.css';

export default function Nav() {
    return (
        <Fragment>
            <Container>
                <p className="text-end m-0 py-2">العربية</p>
            </Container>
            <header className={`${classes.header} mb-4 mb-lg-5`}>
                <Container>
                    <div className='d-flex align-items-center justify-content-between py-4'>
                        <img 
                            src="http://bigramyweb.inovaeg.com/static/media/main-logo.d37fd44b1dd3dfb263bfdd977c7cef90.svg" 
                            alt="logo" />
                        <h4 className="text-center">Hello<br />Mohamed</h4>
                    </div>
                </Container>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <NavLink className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        News
                                    </NavLink>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><NavLink className="dropdown-item" to="/">Action</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/">Another action</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/">Something else here</NavLink></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/courses">Courses</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/e-books">E-Books</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact-us">Contact Us</NavLink>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <button className="btn btn-outline-success" type="button">Cart</button>
                            </form>
                        </div>
                    </div>
                </nav>

            </header>
        </Fragment>
    );
}