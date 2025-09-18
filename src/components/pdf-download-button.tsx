import React from 'react'
import { Button, HStack, Text } from '@chakra-ui/react'
import { Language, useT, useTranslation } from '../i18n'

const PDF_FILE_NAME = 'pavel_belinovich_resume'
const PDF_PATH = '/resume'

const getPDFFileName = (language: Language) => `${PDF_FILE_NAME}_${language}.pdf`
const getPDFFilePath = (language: Language) => `${PDF_PATH}-${language}.pdf`

export const PdfDownloadButton: React.FC = () => {
  const t = useT()
  const { language } = useTranslation()

  const downloadPDF = () => {
    const filename = getPDFFileName(language)
    const pdfPath = getPDFFilePath(language)
    const link = document.createElement('a')

    link.href = pdfPath
    link.download = filename
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Button variant="ghost" colorPalette="blue" size="md" aria-label={t.system.downloadPdf || 'Download PDF'} px={3} onClick={downloadPDF}>
      <HStack gap={2}>
        <Text fontSize="sm" fontWeight="bold" color="fg.blue">
          PDF
        </Text>
      </HStack>
    </Button>
  )
}
