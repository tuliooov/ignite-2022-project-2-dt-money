import { useState, ReactNode } from 'react'
import { createContext } from 'use-context-selector'

interface Currency {
  id: number
  format: string
  currency: string
}

export interface CurrencyContextType {
  optionsCurrency: Currency[]
  currency: Currency
  changeCurrency: (data: Currency) => void
}

interface CurrencyProviderProps {
  children: ReactNode
}

export const CurrencyContext = createContext({} as CurrencyContextType)

export function CurrencyProvider({ children }: CurrencyProviderProps) {
  const optionsCurrency = [
    {
      id: 0,
      format: 'pt-BR',
      currency: 'BRL',
    },
    {
      id: 1,
      format: 'en-US',
      currency: 'USD',
    },
  ]

  const [currency, setCurrency] = useState({
    format: 'pt-BR',
    currency: 'BRL',
  })

  const changeCurrency = (data: Currency) => {
    setCurrency(data)
  }

  return (
    <CurrencyContext.Provider
      value={{ currency, changeCurrency, optionsCurrency }}
    >
      {children}
    </CurrencyContext.Provider>
  )
}
