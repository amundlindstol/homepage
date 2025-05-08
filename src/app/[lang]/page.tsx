import Link from 'next/link'
import { unstable_ViewTransition as ViewTransition } from 'react'
import Vanta from '@/components/vanta'

export default async function Page({
	params,
}: Readonly<{
	params: Promise<{ lang: 'no' | 'en' }>
}>) {
	const { lang } = await params

	return (
		<section className="mx-auto h-full max-w-2xl flex-col" id="frontpage">
			<nav className="h-full content-center justify-center text-center align-middle">
				<Vanta />
				<ViewTransition name="Projects-title">
					<Link href={`/${lang}/project`}>
						<h1 className="text-xl font-bold">i18n Prosjekter</h1>
					</Link>
				</ViewTransition>
			</nav>
		</section>
	)
}
