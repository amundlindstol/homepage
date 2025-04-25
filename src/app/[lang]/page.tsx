import { sanityFetch } from '@/lib/sanity.client'
import { projectExperienceQuery } from '@/lib/sanity.query'
import Image from 'next/image'
import Link from 'next/link'
import { ProjectExperience } from '@/types/types'

export default async function Page() {
	const projectExperiences: ProjectExperience[] = await sanityFetch({
		query: projectExperienceQuery,
		tags: ['projectExperience'],
	})

	return (
		<section className="mx-auto mt-40 grid max-w-5xl grid-cols-1 p-6 md:grid-cols-2">
			<p>hello</p>
			{projectExperiences.map((post) => (
				<article className="m-6" key={post._id}>
					<Link href={`/blog/${post.slug?.current}`}>
						<Image
							src={'/placeholder.svg'}
							alt={'some image'}
							width={600}
							height={600}
							className="aspect-video rounded-lg object-cover"
						/>
						<h1 className="mt-5 mb-2 text-3xl font-semibold">{post.title}</h1>
						<p>{JSON.stringify(post)}</p>
					</Link>
				</article>
			))}
		</section>
	)
}
