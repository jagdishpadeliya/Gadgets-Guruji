import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'iPhone 14 Pro Max',
  description: 'Gadgets Guruji - Your Ultimate Destination for Apple Product Specifications and Reviews.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics/>
        </body>
    </html>
  )
}
