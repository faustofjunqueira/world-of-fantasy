import React from 'react'

export const ApplicationContext = React.createContext()

export function ApplicationProvider({children}) {

  const store = {
  }

  return (
    <ApplicationContext.Provider value={store}>
      {children}
    </ApplicationContext.Provider>
  )
}
