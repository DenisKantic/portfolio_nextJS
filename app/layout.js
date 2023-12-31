import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ŁEXYRI9 TikTok kreator',
  description: 'Vaš omiljeni tiktoker, Lexyri9! Kupovinom mojih proizvoda ne samo da \n' +
  'dobijate vrhunski proizvod, već i pružate podršku osobama sa invaliditetom. \n' +
  'Unisex kape, majice, parfemi i mnogo toga',
  metadataBase: new URL('http://www.lexyri9.com'),
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      </body>
    </html>
  )
}
