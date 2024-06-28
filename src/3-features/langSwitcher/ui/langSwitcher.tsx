import { locales } from '@/5-shared/lib/i18n'
import { useLocale } from 'next-intl'
import { LangSwitcherSelect } from './langSwitcherSelect'

export const LangSwitcher = () => {
  //   const t = useTranslations("LocaleSwitcher");
  const locale = useLocale()

  return (
    <LangSwitcherSelect defaultValue={locale} label={'label'}>
      {locales.map((cur) => (
        <option key={cur} value={cur}>
          {cur}
        </option>
      ))}
    </LangSwitcherSelect>
  )
}
