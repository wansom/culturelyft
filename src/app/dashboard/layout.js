
import { Inter } from 'next/font/google'
import '../dashboard.css'
import DashboardSidebar from '../components/dashboard/sidebar'
import DashboardHeader from '../components/dashboard/header'
import { DataContextProvider, UserProvider } from '../services/DataContext'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dashboard | Culture Lyft',
  description: 'Employee engagement, performance & development platform you need to build an employee experience people love.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main class="flex overflow-x-hidden">
          <UserProvider>
         <DashboardSidebar/>
          <div className=' bg-gray-100 dashboard-main min-h-screen'>
            <DashboardHeader/>
          {children}

          </div>
          </UserProvider>
        
        </main>
      </body>
    </html>
  )
}
