import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
})
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
})

export const metadata: Metadata = {
    title: 'Jeremy Cameron - Design Engineer',
    description: 'Web designer and developer based in Melbourne, Australia',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html className="scroll-smooth" lang="en">
            <head>
                <link
                    rel="icon"
                    type="image/png"
                    href="/favicon/favicon-96x96.png"
                    sizes="96x96"
                />
                <link
                    rel="icon"
                    type="image/svg+xml"
                    href="/favicon/favicon.svg"
                />
                <link rel="shortcut icon" href="/favicon/favicon.ico" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicon/apple-touch-icon.png"
                />
                <meta
                    name="apple-mobile-web-app-title"
                    content="Jeremy Cameron"
                />
                <link rel="manifest" href="/favicon/site.webmanifest" />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-mono)] antialiased `}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
