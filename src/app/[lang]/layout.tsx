import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '../globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Amund Lindstøl',
	description: 'Potet',
}

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode
	params: Promise<{ lang: string }>
}>) {
	const { lang } = await params
	return (
		<html lang={lang} className="h-full" id={'html'}>
			<body className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>{children}</body>
		</html>
	)
}
