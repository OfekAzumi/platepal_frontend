import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { logOut, loginAsync, selectLogged } from './loginSlice'
import LoggedIn from './LoggedIn'
import NotLogged from './NotLogged'
import { getCategoriesAsync } from '../category/categorySlice'
import { getEmployeesAsync } from '../employee/employeeSlice'
import { getDishesAsync } from '../dish/dishSlice'
import { getCustomersAsync } from '../customer/customerSlice'
import { getOrdersAsync } from '../order/orderSlice'

const Login = () => {
  const [password, setPassword] = useState('')
  const [username, setuserName] = useState('')

  const logged = useAppSelector(selectLogged);
  const dispatch = useAppDispatch();

  const shadowStyle = {
    borderRadius: '10px', outline: 'none', boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)'
  }

  const LoginActions = () => {
    dispatch(loginAsync({ username, password }))
    dispatch(getCategoriesAsync())
    dispatch(getEmployeesAsync())
    dispatch(getCustomersAsync())
    dispatch(getOrdersAsync())
    dispatch(getDishesAsync())
  }

  return (
    <div>
      <div className="container mt-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <div className="row justify-content-center">
          {logged ? <LoggedIn /> : <NotLogged />}
        </div>
        <div className="row justify-content-center ">
          {logged && <button className='btn btn-outline-success' onClick={() => dispatch(logOut())}>Logout</button>}
          {!logged && (
            <div className="container mt-5">
              <div className="row justify-content-center ">
                <div className="col-md-6">
                  <div className="card bg-transparent">
                    <div className="card-header">
                      <h3 className="text-center">Login</h3>
                    </div>
                    <div className="card-body ">
                      <div className="form-group">
                        <label>Username</label>
                        <input onChange={(evt) => setuserName(evt.target.value)} className="form-control bg-transparent border-0" placeholder="Enter your username" style={shadowStyle} />
                      </div>
                      <div className="form-group ">
                        <label>Password</label>
                        <input onChange={(evt) => setPassword(evt.target.value)} type="password" className="form-control bg-transparent border-0" placeholder="Enter your password" style={shadowStyle} />
                      </div>
                      <button onClick={() => LoginActions()} className="btn btn-dark btn-block">Login</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login