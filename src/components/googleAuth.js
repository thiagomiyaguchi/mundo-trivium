import React from 'react'
import {CLIENTID}  from './config'
import { useGoogleLogin } from 'react-use-googlelogin'

const GoogleAuthContext = React.createContext()


export const GoogleAuthProvider = ({ children }) => {
  
  const googleAuth = useGoogleLogin({
    // clientId: "80086172271-9j015n6i9rlrvrisbooopncvk94s17vj.apps.googleusercontent.com",
    clientId:  CLIENTID,
    hostedDomain:'colegiotrivium.com.br'
  })
  
  
  
  return (
    <GoogleAuthContext.Provider value={googleAuth}>
      {children}
    </GoogleAuthContext.Provider>
  )
}


export const useGoogleAuth = () => React.useContext(GoogleAuthContext)
