import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { loginUser } from '../features/Auth/athuSlice'

const Loging = () => {
// Getting Data from auth state
  const { user, isSuccess ,isLoading,isError,message} = useSelector((state) => state.auth)

  // initial Sates
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // From Sate
  const [formDatalog, setFormDatalog] = useState({
    email: "",
    password : ""
  })

  // DisStructure State
  const {email, password} = formDatalog

  // From State Logic

  const handleChange = (e) => {
    setFormDatalog({
      ...formDatalog,
      [e.target.name]: e.target.value,
    })
  }

  // From Submission

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(loginUser(formDatalog))
  }

  useEffect(() => {
    if(user && isSuccess){
      navigate("/")

    }
    if(isError && message){
      toast.error(message)
    }
  },[user, isSuccess, isError,message])


  if(isLoading){
    return (
      <h2 className='display-1 text-secondary text-center'> Loading...</h2>
    )
  }

  return (
    <div className='Login-section text-center '>
        <div className='loging-Box bg-light border shadow-lg rounded'>
       <div className=' loginHeading w-100 '>
       <h5 className='text-primary ' > Login Page</h5>
       </div>
    
       <form onSubmit={handleSubmit}>
            <input type="email" name='email' placeholder='Enter your email' className='form-control rounded-0 my-3'
            onChange={handleChange}
            value={email}/>
            <input type="password" name='password' placeholder='Enter your password' className='form-control rounded-0 my-3'
            onChange={handleChange}
            value={password}/>
            <button className='btn btn-success w-50 my-4'> Login</button>


        </form>
       
        </div>
    </div> 
    
  )
}

export default Loging
