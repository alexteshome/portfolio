import '../styles/index.scss'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
