import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const fontPlusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-plus-jakarta' })
const fontHelveticaNue = localFont({ src: '../public/font/Helvetica-Neu-Bold.woff2', variable: '--font-helvetica-neu' })


export const metadata = {
  title: 'Inner Vision',
  description: 'Tune in to reality',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
