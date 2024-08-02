import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { registerUser } from '../features/Auth/athuSlice'

const Rejester = () => {

    // Geting Data From Auth State
    const { user, isSuccess, isLoading, isError, message } = useSelector((state) => state.auth)

    // Initialinzing Hokks
    const navigate = useNavigate();
    const dispatch = useDispatch()

    // From State
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    })

    //  Destructure State
    const { name, email, password, password2 } = formData;

    // From State logic
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    // from Submission

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== password2) {
            toast.error(" Password Not Match")
        }
        dispatch(registerUser(formData))
    }

    useEffect(() => {
        if (user && isSuccess) {
            navigate("/")
        }

        if (isError && message)
            toast.error(message)

    }, [user, isSuccess, isError, message])


    if (isLoading) {
        return (
            <div className='loading d-flex align-items-center justify-content-center w-100'>
                <span className="spinner-border spinner-border-sm text-primary" aria-hidden="true"></span>
                <span className="mx-2 text-primary fs-bold" role="status">Loading...</span>
            </div>
        )
    }

    return (
        <div className='Login-section text-center '>
            <div className='loging-Box bg-light border shadow-lg rounded'>
                <div className=' loginHeading w-100 '>
                    <h5 className='text-primary ' > Register Page</h5>
                </div>

                <form onSubmit={handleSubmit}>
                    <input type="text" name='name' placeholder='Enter your Name' className='form-control rounded-0 my-3 '
                        value={name}
                        onChange={handleChange} />

                    <input type="email" name='email' placeholder='Enter your Email' className='form-control rounded-0 my-3 '
                        value={email}
                        onChange={handleChange} />

                    <input type="password" name='password' placeholder='Enter your password' className='form-control rounded-0 my-3'
                        value={password}
                        onChange={handleChange} />

                    <input type="password" name='password2' placeholder='confirm password' className='form-control rounded-0 my-2'
                        value={password2}
                        onChange={handleChange} />

                    <button className='btn btn-success w-50 my-4'> Register</button>


                </form>

            </div>
        </div>
    )
}

export default Rejester
