import  './Login.css'
import { useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'


function Login(props){

    const [userName, setUserName] = useState("")
    const [password, setPassword ] = useState("")

    const Navigate = useNavigate()

const usernameHandler = (event) =>{
  const value = event.target.value
  setUserName(value)
}

const passwordHandler = (event) => {
const pass = event.target.value

setPassword(pass)
}
const submitHandler = (e) => {
    e.preventDefault()

    if(userName == "qaifi" && password == "qaifi"){
        alert("You have successfully logined")
        props.onLogin(true)
        Navigate("/Orders") 
    }
    else{
        alert("Please enter valid credential")
    }
}



    return ( <div className="container form">
    <div className="form-main-div">
        <form className="form-div" id="loginForm" onSubmit={submitHandler}>
            <h1>Sign In</h1>
            <input type="text" onChange={usernameHandler} name="username" placeholder="Enter Username" className="user-div"/>
            <input type="password" onChange={passwordHandler} name="password" placeholder="Enter Password" className="user-div"/>
            <input type="submit" value="Login" className="login-div" id="btnId"/>
        </form>
    </div>
</div>)
}
export default Login;