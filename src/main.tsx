import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './ChakraCustom/theme.ts'
import Fonts from './ChakraCustom/fonts.tsx'





ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme} >
      <Fonts />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
