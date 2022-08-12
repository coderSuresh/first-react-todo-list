import React from 'react'
import Proptypes from "prop-types"
import { Link } from 'react-router-dom'

export default function header(props) { //prop is something passed from parent to child component
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                {/* using prop as props.title as we wrote props here and title in parent. Name can be changed. */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                    {/* show searchbar if passed boolean is true else hide it */}
                    {props.searchBar ? <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> : ""}
                </div>
            </div>
        </nav>
    )
}

// to display error message on console when something with another data type is passed
// helps to catch bugs early
header.propTypes = {
    title: Proptypes.string,
    searchBar: Proptypes.bool
}

// display default value when the prop (title) is not passed from the parent (App.js)
header.defaultProps = {
    title: "Your Title Here",
    searchBar: true
}