import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import '../globals.css'
import Header from '@/components/header'
import { Vanta } from '@/components/vanta'

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
	params: Promise<{ locale: 'no' | 'en' }>
}>) {
	const { locale } = await params
	return (
		<NextIntlClientProvider>
			<div id={'vanta-bg'}></div>
			<html lang={locale} className="h-full" id={'html'}>
				<body className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
					<Header locale={locale} />
					{children}
				</body>
			</html>
			<Vanta />
		</NextIntlClientProvider>
	)
}
