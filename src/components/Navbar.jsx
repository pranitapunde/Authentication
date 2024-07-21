import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../features/Auth/athuSlice'


const Navbar = () => {

    const { user } = useSelector((state) => state.auth)
     const dispatch = useDispatch()

     const logOut = () => {
        dispatch( logoutUser())
     }    
    return (
        <nav className="navbar bg-info">
            <div className="container-fluid">
                <Link to={"/"}><span className="navbar-brand mb-0 h1 fw-bold text-light"> Authentication</span></Link>
                <span>
                    {
                       user ? (
                            <button className='btn bnt-sm btn-danger rounded-0' onClick={logOut}> Logout</button>
                        ) : (
                            <>
                                <Link to={"/rejester"}>  <button className='btn bnt-sm btn-success rounded-0 mx-2'> Register</button></Link>
                                <Link to={"/login"}>  <button className='btn bnt-sm btn-primary rounded-0 mx-2'> Login</button></Link>
                            </>
                        )

                    }

                </span>
            </div>
        </nav>
    )
}

export default Navbar

