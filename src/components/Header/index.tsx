import {
  ActionsDiv,
  HeaderContainer,
  HeaderContent,
  NewTransactionButton,
} from './styles'
import * as Dialog from '@radix-ui/react-dialog'

import { NewTransactionModal } from '../NewTransactionModal'

import logo from '../../assets/logo.svg'
import { SettingsModal } from '../SettingsModal'
import { GearSix, Moon, Plus, Sun } from 'phosphor-react'

interface HeaderProps {
  handleChangeTheme: () => void
  theme: 'black' | 'white'
}

export function Header({ handleChangeTheme, theme }: HeaderProps) {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="DT Money 2.0" />

        <ActionsDiv>
          <NewTransactionButton type="button" onClick={handleChangeTheme}>
            {theme === 'black' ? <Sun size={24} /> : <Moon size={24} />}
          </NewTransactionButton>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <NewTransactionButton type="button">
                <Plus size={24} />
              </NewTransactionButton>
            </Dialog.Trigger>
            <NewTransactionModal />
          </Dialog.Root>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <NewTransactionButton type="button">
                <GearSix size={24} />
              </NewTransactionButton>
            </Dialog.Trigger>
            <SettingsModal />
          </Dialog.Root>
        </ActionsDiv>
      </HeaderContent>
    </HeaderContainer>
  )
}
