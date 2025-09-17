import React from 'react'
import { Button, HStack, Text } from '@chakra-ui/react'
import { useTranslation, Language } from '../i18n'

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage, t } = useTranslation()

  const toggleLanguage = () => {
    const newLanguage: Language = language === 'ru' ? 'en' : 'ru'
    setLanguage(newLanguage)
  }

  return (
    <Button
      onClick={toggleLanguage}
      variant="ghost"
      colorPalette="blue"
      size="md"
      aria-label={language === 'ru' ? t.system.toggleLanguage.en : t.system.toggleLanguage.ru}
      px={3}
    >
      <HStack gap={2}>
        <Text fontSize="sm" fontWeight="bold" color="fg.blue">
          {language === 'en' ? 'RU' : 'EN'}
        </Text>
      </HStack>
    </Button>
  )
}
