import './globals.css'


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
