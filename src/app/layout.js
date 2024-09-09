import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Culture Lyft',
  description: 'We have trained,interviewed and equipped over 10,000 sales assistants for businesses',
  keywords: ['remote jobs in Kenya'],
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: 'Culture Lyft',
    description: 'We have trained,interviewed and equipped over 10,000 sales assistants for businesses',
    url: 'https://www.culturelyft.com',
    siteName: 'Culture Lyft',
    images: '/home.png',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
