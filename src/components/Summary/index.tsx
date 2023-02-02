import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'
import { useSummary } from '../../hooks/useSummary'
import { priceFormatter } from '../../utils/formatter'
import { SummaryContainer, SummaryCard } from './styles'
import { CurrencyContext } from '../../contexts/CurrencyContext'
import { useContextSelector } from 'use-context-selector'

export function Summary() {
  const summary = useSummary()
  const currency = useContextSelector(CurrencyContext, (context) => {
    return context.currency
  })

  const priceFormated = priceFormatter(currency.format, currency.currency)

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00B37E" />
        </header>

        <strong>{priceFormated.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </header>

        <strong>{priceFormated.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#FFF" />
        </header>

        <strong>{priceFormated.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
