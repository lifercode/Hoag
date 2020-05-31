import React from 'react'

import AppThemeProvider from './components/AppThemeProvider'
import { AppProvider } from './store'
import Routes from './routes'

const App = () => (
  <AppProvider>
    <AppThemeProvider>
      <Routes />
    </AppThemeProvider>
  </AppProvider>
)

export default App
