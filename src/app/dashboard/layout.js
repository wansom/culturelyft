import { Inter } from 'next/font/google'
import '../dashboard.css'
import DashboardSidebar from '../components/dashboard/sidebar'
import DashboardHeader from '../components/dashboard/header'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dashboard | Culture Lyft',
  description: 'Employee engagement, performance & development platform you need to build an employee experience people love.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main class="dash-view claims-views clients-view flex">
          <DashboardSidebar/>
          <div className='w-full'>
            <DashboardHeader/>
          {children}

          </div>
        
        </main>
      </body>
    </html>
  )
}
