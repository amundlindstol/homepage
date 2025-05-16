import { Link } from '@/i18n/navigation'
import { unstable_ViewTransition as ViewTransition } from 'react'
import { getTranslations } from 'next-intl/server'

export default async function Page({
	params,
}: Readonly<{
	params: Promise<{ locale: 'no' | 'en' }>
}>) {
	const t = await getTranslations('common')

	return (
		<section className="mx-auto h-full max-w-2xl flex-col" id="frontpage">
			<nav className="h-full content-center justify-center text-center align-middle">
				<ViewTransition name="Projects-title">
					<Link href={`/project`}>
						<h1 className="text-xl font-bold">{t('projects')}</h1>
					</Link>
				</ViewTransition>
			</nav>
		</section>
	)
}
