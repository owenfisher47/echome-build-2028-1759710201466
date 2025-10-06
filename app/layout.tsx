import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Future 2028 - A Glimpse Into Tomorrow',
  description: 'Experience the future of technology, society, and human innovation in 2028',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}