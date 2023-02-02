import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../../contexts/TransactionsContext'

import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary'

import { dateFormatter, priceFormatter } from '../../utils/formatter'

import {
  TransactionsContainer,
  TransactionsTable,
  PriceHighlight,
  HeaderTransactions,
  TransactionCardList,
  CardTransaction,
} from './styles'
import { CalendarBlank, TagSimple } from 'phosphor-react'
import { CurrencyContext } from '../../contexts/CurrencyContext'

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  const currency = useContextSelector(CurrencyContext, (context) => {
    return context.currency
  })

  const priceFormated = priceFormatter(currency.format, currency.currency)
  const dateFormatted = dateFormatter(currency.format)

  return (
    <>
      <Header />
      <Summary />

      <TransactionsContainer>
        <HeaderTransactions>
          <span>Transações</span>
          <span>
            {transactions.length > 1
              ? `${transactions.length} itens`
              : `${transactions.length} item`}
          </span>
        </HeaderTransactions>

        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormated.format(transaction.price)}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatted.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>

        <TransactionCardList>
          {transactions.map((transaction) => (
            <CardTransaction key={transaction.id}>
              <header>
                <span>{transaction.description}</span>
                <PriceHighlight variant={transaction.type}>
                  {transaction.type === 'outcome' && '- '}
                  {priceFormated.format(transaction.price)}
                </PriceHighlight>
              </header>
              <footer>
                <div>
                  <TagSimple size={16} />
                  {transaction.category}
                </div>
                <div>
                  <CalendarBlank size={16} />
                  {dateFormatted.format(new Date(transaction.createdAt))}
                </div>
              </footer>
            </CardTransaction>
          ))}
        </TransactionCardList>
      </TransactionsContainer>
    </>
  )
}
