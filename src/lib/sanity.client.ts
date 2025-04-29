import 'server-only'
import { type ClientConfig, createClient, type QueryParams } from '@sanity/client'
import { apiVersion, dataset, projectId, token } from '@/lib/sanity.api'

const config: ClientConfig = {
	projectId,
	dataset,
	apiVersion,
	// set CDN to live API in development mode
	useCdn: process.env.NODE_ENV === 'development',
	token,
}

const client = createClient(config)

export async function sanityFetch<QueryResponse>({
	query,
	qParams = {},
	tags,
}: {
	query: string
	qParams?: QueryParams
	tags?: string[]
}): Promise<QueryResponse> {
	return client.fetch<QueryResponse>(query, qParams, {
		// disable cache in development
		cache: process.env.NODE_ENV === 'development' ? 'no-store' : 'force-cache',
		next: { tags },
	})
}

// TODO remove this?
// const { sanityFetch: sanityFetchLive, SanityLive } = defineLive({
// 	client: client.withConfig({
// 		// Live content is currently only available on the experimental API
// 		// https://www.sanity.io/docs/api-versioning
// 		apiVersion: 'vX',
// 	}),
// })
