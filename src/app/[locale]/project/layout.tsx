import type { Metadata } from 'next'
import BackButton from '@/components/back-button'

export const metadata: Metadata = {
	title: 'Amund Lindstøl',
	description: 'Potet',
}

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode
	params: Promise<{ locale: string }>
}>) {
	return (
		<div className="pb-14">
			{children}
			<BackButton />
		</div>
	)
}
