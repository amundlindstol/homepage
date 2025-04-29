import Image from 'next/image'
import { unstable_ViewTransition as ViewTransition } from 'react'
import { ProjectExperienceQueryResult } from '@/types/types'

export default function ExperienceCard({
	experience,
	lang,
}: Readonly<{
	experience: ProjectExperienceQueryResult[0]
	lang: 'no' | 'en'
}>) {
	return (
		<ViewTransition name={`ExperienceCard-${experience._id}`}>
			<Image
				src={experience?.cover?.image || '/placeholder.svg'}
				alt={'some image'}
				width={600}
				height={600}
				className="aspect-video rounded-lg object-cover"
			/>
			<h1 className="mt-5 mb-2 text-3xl font-semibold">{experience.title}</h1>
			<p className="text-muted-foreground">{experience.customer}</p>
			<p className="text-muted-foreground">
				{experience?.dateFrom &&
					new Date(experience.dateFrom).toLocaleDateString(lang, {
						year: 'numeric',
						month: 'long',
					})}{' '}
				-{' '}
				{experience?.dateTo
					? new Date(experience.dateTo).toLocaleDateString(lang, {
							year: 'numeric',
							month: 'long',
						})
					: 'i18n Now'}
			</p>
		</ViewTransition>
	)
}
