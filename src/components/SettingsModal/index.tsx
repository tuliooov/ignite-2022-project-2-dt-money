import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { useContextSelector } from 'use-context-selector'
import { CurrencyContext } from '../../contexts/CurrencyContext'

import { Overlay, Content, CloseButton } from './styles'

export function SettingsModal() {
  const { changeCurrency, currency, optionsCurrency } = useContextSelector(
    CurrencyContext,
    (context) => {
      return context
    },
  )

  const { register, handleSubmit } = useForm<{ value: number }>({
    defaultValues: {
      value: currency.id,
    },
  })

  const handleChangeCurrency = (data: { value: number }) => {
    const found = optionsCurrency.find((option) => option.id === data.value)
    if (found) {
      changeCurrency(found)
    }
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Configuração</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleChangeCurrency)}>
          <select {...register('value', { valueAsNumber: true })}>
            <option value={0}>(R$) Real</option>
            <option value={1}>($) Dólar</option>
          </select>
          <button type="submit">{'Salvar'}</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
