import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App5() {
  return (
    <UserContextProvider>
       <Login/>
       <Profile/>
    </UserContextProvider>
  )
}

export default App5