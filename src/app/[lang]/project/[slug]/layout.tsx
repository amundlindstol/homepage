import type { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Amund Lindstøl',
	description: 'Potet',
}

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode
	params: Promise<{ lang: string; slug: string }>
}>) {
	const { lang } = await params
	return (
		<div className="mb-14">
			{children}
			<div
				className={
					'bg-secondary animate-in slide-in-from-bottom fixed bottom-0 z-50 w-full p-4 shadow-[0px_-20px_20px_0px_#000000] duration-500 md:hidden'
				}
			>
				<Link href={`/${lang}`} className="flex justify-center" scroll={false}>
					<ArrowLeft className={''} />
				</Link>
			</div>
		</div>
	)
}
