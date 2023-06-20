"use client"

import React, { createContext } from "react"

type AuthContextType = {
  loggedIn: boolean
  setLoggedIn: (loggedIn: boolean) => void
}
export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [loggedIn, setLoggedIn] = React.useState(false)

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  )
}
