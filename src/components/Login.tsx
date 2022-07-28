import React from 'react'

import { useSelector, useDispatch } from "react-redux"

import { selectUser, login, logout} from "./../redux/userSlice"

function Login() {
    
    const dispatch = useDispatch()
const user = useSelector(selectUser)

const handleLogin = () => {
    if(user === null){
        dispatch(login([]))
        return
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