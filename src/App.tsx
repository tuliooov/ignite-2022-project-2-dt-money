import { DefaultTheme, ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/global'
import { defaultTheme, themeBlack, themeWhite } from './styles/themes/default'

import { TransactionsProvider } from './contexts/TransactionsContext'
import { Transactions } from './pages/Transactions'
import { CurrencyProvider } from './contexts/CurrencyContext'
import { useState } from 'react'

export function App() {
  const [color, setColor] = useState<'black' | 'white'>('black')
  const themeColor = color === 'white' ? { ...themeWhite } : { ...themeBlack }
  const theme = { ...defaultTheme, ...themeColor } as DefaultTheme

  const handleChangeTheme = () => {
    setColor((color) => (color === 'white' ? 'black' : 'white'))
  }

  return (
    <CurrencyProvider>
      <ThemeProvider theme={theme}>
        <TransactionsProvider>
          <Transactions handleChangeTheme={handleChangeTheme} theme={color} />
        </TransactionsProvider>
        <GlobalStyle />
      </ThemeProvider>
    </CurrencyProvider>
  )
}
