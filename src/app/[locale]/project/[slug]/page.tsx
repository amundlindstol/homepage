import { sanityFetch } from '@/lib/sanity.client'
import { singleProjectExperienceQuery } from '@/lib/sanity.query'
import { SingleProjectExperienceQueryResult } from '@/types/types'
import { PortableText } from 'next-sanity'
import ExperienceCard from '@/components/experience-card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { getTranslations } from 'next-intl/server'

export default async function Page({
	params,
}: Readonly<{
	params: Promise<{ locale: 'no' | 'en' }>
}>) {
	const { locale } = await params
	const experience: SingleProjectExperienceQueryResult = await sanityFetch({
		query: singleProjectExperienceQuery,
		qParams: await params,
		tags: ['projectExperience'],
	})
	const t = await getTranslations('common')

	if (!experience) {
		return <div className="mx-auto">Ingen erfaring funnet</div>
	}

	return (
		<section className="bg-background mx-auto flex max-w-2xl justify-center">
			<article className="m-6" key={experience._id}>
				<ExperienceCard experience={experience} lang={locale} />
				<div className="fade-in animate-in duration-1000">
					<h2 id="about" className="mt-4 font-semibold">
						{t('about-project')}
					</h2>
					<Accordion
						type="multiple"
						/* @ts-expect-error ignore */
						collapsible="true"
						className="bg-card my-3 px-5"
						defaultValue={experience?.projectRole?.map((it) => it._key)}
					>
						<AccordionItem value="customerDescription">
							<AccordionTrigger>{experience.customer}</AccordionTrigger>
							<AccordionContent>
								{/* @ts-expect-error ignore */}
								<PortableText value={experience.customerDescription} key={experience._id} />
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="projectDescription">
							<AccordionTrigger>{experience.title}</AccordionTrigger>
							<AccordionContent>
								{/* @ts-expect-error ignore */}
								<PortableText value={experience.projectDescription} key={experience._id} />
							</AccordionContent>
						</AccordionItem>
					</Accordion>
					{experience?.projectRole?.length ? (
						<>
							<h2 id="roles" className="mt-4 font-semibold">
								{t('roles')}
							</h2>
							{/* @ts-expect-error ignore */}
							<Accordion type="multiple" collapsible="true" className="bg-card my-3 px-5">
								{experience?.projectRole?.map((role) => (
									<AccordionItem value={role._key} key={role._key}>
										<AccordionTrigger>{role.title}</AccordionTrigger>
										<AccordionContent>
											{/* @ts-expect-error ignore */}
											<PortableText value={role.description} />
										</AccordionContent>
									</AccordionItem>
								))}
							</Accordion>
						</>
					) : (
						<></>
					)}
				</div>
			</article>
		</section>
	)
}
