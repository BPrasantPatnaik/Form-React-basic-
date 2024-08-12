import React, { useState } from "react"
import { ContextProvider } from "./context/userContext"
import Form from "./Form"

function App() {
  const [user, setUserStatus] = useState('');
  const [password, setPass] = useState('');

  const setUser=(use)=>{
    setUserStatus(use);
  }
  const setPassword=(pass)=>{
    setPass(pass);
  }

  return (
    <ContextProvider value={{user,password,setUser,setPassword}}>
      <div className="w-screen h-screen flex justify-center items-center">
        <Form/>
      </div>
      
    </ContextProvider>
  )
}

export default App
