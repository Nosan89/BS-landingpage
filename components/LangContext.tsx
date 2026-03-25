'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Lang = 'cs' | 'en'

interface LangContextType {
  lang: Lang
  setLang: (l: Lang) => void
  t: (cs: string, en: string) => string
}

const LangContext = createContext<LangContextType>({
  lang: 'cs',
  setLang: () => {},
  t: (cs) => cs,
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('cs')
  const t = (cs: string, en: string) => (lang === 'cs' ? cs : en)
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
