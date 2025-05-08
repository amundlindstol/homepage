import { sanityFetch } from '@/lib/sanity.client'
import { projectExperienceQuery } from '@/lib/sanity.query'
import { ProjectExperienceQueryResult } from '@/types/types'
import ExperienceCard from '@/components/experience-card'
import Link from 'next/link'
import { unstable_ViewTransition as ViewTransition } from 'react'

export default async function Page({
	params,
}: Readonly<{
	params: Promise<{ lang: 'no' | 'en' }>
}>) {
	const { lang } = await params
	const projectExperiences: ProjectExperienceQueryResult = await sanityFetch({
		query: projectExperienceQuery,
		qParams: await params,
		tags: ['projectExperience'],
	})

	return (
		<section className="mx-auto max-w-2xl flex-col">
			<ViewTransition name="Projects-title">
				<h1 className="pt-6 text-center text-xl font-bold">i18n Prosjekter</h1>
			</ViewTransition>
			{projectExperiences?.map(async (experience) => (
				<nav className="m-6" key={experience._id}>
					<Link href={`/${lang}/project/${experience.slug}`}>
						<div className="bg-background hover:bg-muted rounded-lg p-6 transition duration-600 ease-in-out active:rounded-lg">
							<ExperienceCard experience={experience} lang={lang} />
						</div>
					</Link>
				</nav>
			))}
		</section>
	)
}
