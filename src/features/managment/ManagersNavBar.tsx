import React from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { logOut, selectLogged, selectUserName } from '../login/loginSlice';

const ManagersNavBar = () => {

    const textStyle = {
        color: '#88AB8E',
        fontFamily: 'Diphylleia, sans-serif'
    }

    const username = useAppSelector(selectUserName);
    const logged = useAppSelector(selectLogged);
    const dispatch = useAppDispatch();

    const capitalizeFirstLetter = (name: string) => {
        return (name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav2" aria-controls="navbarNav2" aria-expanded="false" aria-label="Toggle navigation" style={{ backgroundColor: '#88AB8E' }}>
                    <span className="navbar-toggler-icon" ></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav2">
                    <ul className="navbar-nav d-flex justify-content-between align-items-center w-100" style={textStyle}>
                        {username && logged ? (
                            <ul className="navbar-nav d-flex justify-content-between align-items-center w-100" style={textStyle}>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/managment/home' style={textStyle}>Reports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/managment/orders' style={textStyle}>Orders</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/managment/employees' style={textStyle}>Employees</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/managment/customers' style={textStyle}>Customers</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/managment/dishes' style={textStyle}>Dishes</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/managment/categories' style={textStyle}>Categories</Link>
                                </li>
                                <li className="nav-item">
                                    <div className="dropdown">
                                        <span className="nav-link dropdown-toggle" role="button" id="userDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={textStyle}>Welcome, {capitalizeFirstLetter(username)}</span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown" style={{ backgroundColor: '#F2F1EB' }}>
                                            <Link to='/managment/register' className="dropdown-item">Register</Link>
                                            <Link to='/' className="dropdown-item" onClick={() => dispatch(logOut())}>Logout</Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        ) : (
                            <Link to='/managment/login' className="nav-link" style={textStyle} >Login</Link>
                        )}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default ManagersNavBar