import React from 'react'
import { Button, HStack, Text } from '@chakra-ui/react'
import { useT } from '../i18n'

export const PdfDownloadButton: React.FC = () => {
  const t = useT()

  const downloadPDF = () => {
    // Создаем ссылку для скачивания PDF
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Pavel_Belinovich_Resume.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Button onClick={downloadPDF} variant="ghost" colorPalette="blue" size="md" aria-label={t.system.downloadPdf || 'Download PDF'} px={3}>
      <HStack gap={2}>
        <Text fontSize="sm" fontWeight="bold" color="fg.blue">
          PDF
        </Text>
      </HStack>
    </Button>
  )
}
