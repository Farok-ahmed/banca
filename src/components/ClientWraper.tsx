import { ThemeProvider } from '@/contextAPi/ThemeContext'
import React from 'react'

const ClientWraper = ({children}: {children: React.ReactNode}) => {
  return (
    <ThemeProvider>{children}</ThemeProvider>
  )
}

export default ClientWraper