import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import { TransactionsProvider } from './contexts/TransactionsContext'
import { Transactions } from './pages/Transactions'
import { CurrencyProvider } from './contexts/CurrencyContext'

export function App() {
  return (
    <CurrencyProvider>
      <ThemeProvider theme={defaultTheme}>
        <TransactionsProvider>
          <Transactions />
        </TransactionsProvider>
        <GlobalStyle />
      </ThemeProvider>
    </CurrencyProvider>
  )
}
