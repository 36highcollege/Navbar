import './globals.css'

export const metadata = {
  title: 'Navbar',
  description: 'Generated by Anas.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
