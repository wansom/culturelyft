
import { Inter } from 'next/font/google'
import '../dashboard.css'
import DashboardSidebar from '../components/dashboard/sidebar'
import DashboardHeader from '../components/dashboard/header'
import { DataContextProvider, UserProvider } from '../services/DataContext'
import Drawer from '../components/drawer'


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
         <div className='hidden lg:block lg:basis-1/4 bg-[#01382E]'>
         <DashboardSidebar/>
         </div>
          <div className=' w-full basis-4/4 lg:basis-3/4 bg-gray-100'>
            <DashboardHeader/>
          {children}

          </div>
          </UserProvider>
        
        </main>
      </body>
    </html>
  )
}
