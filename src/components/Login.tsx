import React from 'react'

import axios from 'axios'

import { useSelector, useDispatch } from "react-redux"

import { selectUser, login, logout} from "./../redux/userSlice"

function Login() {
    
    const dispatch = useDispatch()
const user = useSelector(selectUser)

const handleLogin = () => {
    if(user === null){
        async function fetchData(){
            const response = await axios.get("data.json")
            console.log(response)
            dispatch(login(response.data.currentUser))
            return response.data
          }
          fetchData()
    }
    dispatch(logout())
}

  return (
    <div className="login">
        {user?<div className="login__user">
            <img src={user?.image}/>
            <div>
                <h3>{user?.name}</h3>
                <p>@{user?.username}</p>
            </div>
        </div>: <span/>}
        <button className="button button--blue" onClick={handleLogin}>{user?"Logout":"Login"}</button>
    </div>
  )
}

export default Login