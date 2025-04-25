import { revalidateTag } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

export async function POST(req: NextRequest) {
	try {
		const { body, isValidSignature } = await parseBody<{
			_type: string
			slug?: string
		}>(req, process.env.NEXT_SANITY_HOOK_SECRET)
		console.log(`Revalidate hook triggered. isValidSignature: ${isValidSignature}. body: ${JSON.stringify(body)}`)

		if (!isValidSignature) {
			return new Response('Invalid Signature', { status: 401 })
		}

		if (!body?._type) {
			return new Response('Bad Request', { status: 400 })
		}

		console.log(`Revalidating tag: ${body._type}`)
		revalidateTag(body._type)
		return NextResponse.json({
			status: 200,
			revalidated: true,
			now: Date.now(),
			body,
		})
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (error: any) {
		console.error(error)
		return new Response(error.message, { status: 500 })
	}
}
