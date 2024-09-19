import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Culture Lyft',
  description: 'We provide customer support,sales assisstants and enterprise call centers  for businesses',
  keywords: ['Customer support in Kenya','Call Center','Sales Assistant','remote jobs in Kenya'],
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: 'Culture Lyft',
    description: 'We provide customer support,sales assisstants and enterprise call centers  for businesses',
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
