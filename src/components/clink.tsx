import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Link } from '@chakra-ui/react'

export interface ICLinkProps extends React.ComponentProps<typeof Link> {
  to: string
  children: React.ReactNode
  pdf?: boolean
}

export const CLink = ({ to, pdf, children, ...props }: ICLinkProps) => {
  if (pdf) {
    const baseUrl = process.env.BASE_URL || `http://localhost:${process.env.PORT || 8001}`
    const cleanUrl = `${baseUrl.replace(/\/$/, '')}/${to.replace(/^\//, '')}`

    return (
      <Link href={cleanUrl} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <RouterLink to={to}>
      <Link {...props}>{children}</Link>
    </RouterLink>
  )
}
