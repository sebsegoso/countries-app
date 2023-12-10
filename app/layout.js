import { Inter } from 'next/font/google'
import './globals.scss'
import Navbar from '@/components/navbar/Navbar/Navbar'
import { Toaster } from 'react-hot-toast'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Countries App',
  description: "Explore world flags with CountriesApp - a global journey in every tap! 🌍",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Toaster />

      </body>
    </html>
  )
}