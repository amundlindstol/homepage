import { sanityFetch } from '@/lib/sanity.client'
import { postQuery } from '@/lib/sanity.query'
import { Post } from '@/types/types'
import Image from 'next/image'
import Link from 'next/link'

export default async function Page() {
	// Revalidate document when "post" is changed
	const posts: Post[] = await sanityFetch({
		query: postQuery,
		tags: ['post'],
	})

	return (
		<section className="mx-auto mt-40 grid max-w-5xl grid-cols-1 p-6 md:grid-cols-2">
			<p>youyo</p>
			{posts.map((post) => (
				<article className="m-6" key={post._id}>
					<Link href={`/blog/${post.slug}`}>
						<Image
							src={'/post.cover.image'}
							alt={'/post.cover.alt'}
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
