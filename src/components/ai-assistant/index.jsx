'use client'

import { AssistantProvider } from './AssistantContext'
import FloatingAssistant from './FloatingAssistant'
import AssistantModal from './AssistantModal'

export default function AssistantRoot() {
  return (
    <AssistantProvider>
      <FloatingAssistant />
      <AssistantModal />
    </AssistantProvider>
  )
}

