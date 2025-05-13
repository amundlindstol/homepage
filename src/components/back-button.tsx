'use client'
import { ArrowLeft } from 'lucide-react'
import { Link, usePathname } from '@/i18n/navigation'

export default function BackButton() {
	const pathname = usePathname()
	const href = pathname?.split('/').slice(0, -1).join('/') || '/'
	return (
		<div
			className={
				'bg-secondary animate-in slide-in-from-bottom fixed bottom-0 z-50 w-full p-4 shadow-[0px_-20px_20px_0px_#000000] duration-500 md:hidden'
			}
		>
			<Link href={href} className="flex justify-center" scroll={false}>
				<ArrowLeft />
			</Link>
		</div>
	)
}
