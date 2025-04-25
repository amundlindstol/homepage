import { sanityFetch } from '@/lib/sanity.client'
import { projectExperienceQuery } from '@/lib/sanity.query'
import Image from 'next/image'
import Link from 'next/link'
import { ProjectExperience } from '@/types/types'
import { PortableText } from 'next-sanity'

export default async function Page() {
	const projectExperiences: ProjectExperience[] = await sanityFetch({
		query: projectExperienceQuery,
		tags: ['projectExperience'],
	})

	return (
		<section className="mx-auto grid max-w-5xl grid-cols-1 p-6 md:grid-cols-2">
			{projectExperiences.map((experience) => (
				<article className="m-6" key={experience._id}>
					<Link href={`/blog/${experience.slug?.current}`}>
						<div className="hover:bg-muted rounded-lg p-6 transition duration-600 ease-in-out active:rounded-lg">
							<Image
								src={'/placeholder.svg'}
								alt={'some image'}
								width={600}
								height={600}
								className="aspect-video rounded-lg object-cover"
							/>
							<h1 className="mt-5 mb-2 text-3xl font-semibold">{experience.title}</h1>
							<PortableText value={experience.projectDescription} key={experience._id} />
						</div>
					</Link>
				</article>
			))}
		</section>
	)
}
