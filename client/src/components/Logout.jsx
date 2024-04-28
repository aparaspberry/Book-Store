import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Logout = ({setRole}) => {
    const navigate = useNavigate()
  useEffect(() => {
    axios.get('https://localhost:3001/auth/logout')   //Axios GET method loggs out the user and returns to the Dashboard/Home page
    .then(res => {
        if(res.data.logout) {
            setRole('')
            navigate('/')
        }
    }).catch(err => console.log(err))
  }, [])
}

export default Logout;
