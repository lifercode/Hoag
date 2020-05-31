import React from 'react'

import AppThemeProvider from './components/AppThemeProvider'
import Routes from './routes'

const App = () => (
  <AppThemeProvider>
    <Routes />
  </AppThemeProvider>
)

export default App
