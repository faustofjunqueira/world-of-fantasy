import axios from 'axios'
import React from 'react'

const HttpContext = React.createContext();

export function HttpProvider({children}) {

  const baseURL = process.env.REACT_APP_HTTP_BASE_URL

  const instance = axios.create({
    baseURL,
    headers: {}
  })


  return (
    <HttpContext.Provider value={instance}>
      {children}
    </HttpContext.Provider>
  );
}
