import React from "react"

import { Navigate } from "react-router-dom"
import { Header } from "../components"


export default function PrivateRoute({ children,  ...rest }) {
  const user = localStorage.getItem("emissorNota:userData")
  

    if (!user) {
    
      return <Navigate to="/login" replace />
   }

 
  return (
  <>
  {children}
  </>
  )
}

