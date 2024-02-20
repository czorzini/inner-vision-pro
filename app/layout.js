import './globals.css'
import Providers from '../components/Providers'


export const metadata = {
  title: 'Inner Vision Pro',
  description: 'Tune in to reality',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers><body>{children}</body></Providers>
    </html>
  )
}
