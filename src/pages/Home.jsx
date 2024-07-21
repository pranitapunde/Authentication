import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const {user} = useSelector((state) => state.auth)
  const navigate = useNavigate()

  useEffect(() => {
    if(!user) {
      navigate("/login")
    }

  },[user])


  return (
    <div className="container p-5">
        <h1 className='dispaly-1 w-100 d-flex align-items-center justify-content-center '> Home Page</h1>
      
    </div>
  )
}

export default Home
