import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LEXYRI9 website',
  description: 'Your famous tiktoker!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      </body>
    </html>
  )
}
