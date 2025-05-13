import { sanityFetch } from '@/lib/sanity.client'
import { projectExperienceQuery } from '@/lib/sanity.query'
import { ProjectExperienceQueryResult } from '@/types/types'
import ExperienceCard from '@/components/experience-card'
import { Link } from '@/i18n/navigation'
import { unstable_ViewTransition as ViewTransition } from 'react'
import { getTranslations } from 'next-intl/server'

export default async function Page({
	params,
}: Readonly<{
	params: Promise<{ locale: 'no' | 'en' }>
}>) {
	const { locale } = await params
	const projectExperiences: ProjectExperienceQueryResult = await sanityFetch({
		query: projectExperienceQuery,
		qParams: await params,
		tags: ['projectExperience'],
	})
	const t = await getTranslations('common')

	return (
		<section className="mx-auto max-w-2xl flex-col">
			<ViewTransition name="Projects-title">
				<h1 className="pt-6 text-center text-xl font-bold">{t('projects')}</h1>
			</ViewTransition>
			{projectExperiences?.map(async (experience) => (
				<nav className="m-6" key={experience._id}>
					<Link href={`/project/${experience.slug}`}>
						<div className="bg-background hover:bg-muted rounded-lg p-6 transition duration-600 ease-in-out active:rounded-lg">
							<ExperienceCard experience={experience} lang={locale} />
						</div>
					</Link>
				</nav>
			))}
		</section>
	)
}
