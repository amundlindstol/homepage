import { NextRequest, NextResponse } from 'next/server'

// const locales = ['no', 'en'] // TODO add en when ready
const locales = ['no']

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) {
	const acceptLanguage = request.headers.get('accept-language')
	if (!acceptLanguage) return locales[0]

	const preferredLocale = acceptLanguage
		.split(',')
		.map((lang) => lang.split(';')[0])
		.find((lang) => locales.includes(lang))

	return preferredLocale || locales[0]
}

export function middleware(request: NextRequest) {
	// Check if there is any supported locale in the pathname
	const { pathname } = request.nextUrl
	const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

	if (pathnameHasLocale) return

	// Redirect if there is no locale
	const locale = getLocale(request)
	request.nextUrl.pathname = `/${locale}${pathname}`
	// e.g. incoming request is /products
	// The new URL is now /no/products
	return NextResponse.redirect(request.nextUrl)
}

export const config = {
	matcher: [
		// root URL
		'/',
		// Match all paths except the ones starting with _next|studio|api|en|no
		'/((?:_next|studio|api|en|no)(?!$|/).*)',
	],
}
