'use client'

import { LocaleProvider } from '../../contexts/LocaleContext'
import { DownloadPromptProvider } from '../../contexts/DownloadPromptContext'
import LanguageChoiceModal from '../modals/LanguageChoiceModal'
import AssistantRoot from '../ai-assistant'

export default function AppProviders({ children }) {
  return (
    <LocaleProvider>
      <DownloadPromptProvider>
        <LanguageChoiceModal />
        {children}
        <AssistantRoot />
      </DownloadPromptProvider>
    </LocaleProvider>
  )
}
