import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Developer Portfolio',
  description: 'A modern developer portfolio built with Next.js, TypeScript, and Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-cmu antialiased">
        {children}
      </body>
    </html>
  )
}


