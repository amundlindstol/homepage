'use client'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { usePathname, useRouter } from '@/i18n/navigation'
import { GlobeIcon } from 'lucide-react'
import { useParams } from 'next/navigation'
import { startTransition } from 'react'

export default function Header(props: Readonly<{ locale: 'no' | 'en' }>) {
	const router = useRouter()
	const pathname = usePathname()
	const params = useParams()

	function onSelectChange(locale: 'no' | 'en') {
		startTransition(() => {
			router.replace(
				// @ts-expect-error -- TypeScript will validate that only known `params`
				// are used in combination with a given `pathname`. Since the two will
				// always match for the current route, we can skip runtime checks.
				{ pathname, params },
				{ locale: locale }
			)
		})
	}

	return (
		<header className="absolute flex w-full justify-center">
			<div className="flex w-full max-w-xl content-center justify-end p-2">
				<DropdownMenu>
					<DropdownMenuTrigger asChild={false} className="z-50" aria-description={'Language'}>
						<GlobeIcon />
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-56">
						{/* @ts-expect-error value can be either no or en */}
						<DropdownMenuRadioGroup value={props.locale} onValueChange={onSelectChange}>
							<DropdownMenuRadioItem value="no">Norsk</DropdownMenuRadioItem>
							<DropdownMenuRadioItem value="en">English</DropdownMenuRadioItem>
						</DropdownMenuRadioGroup>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</header>
	)
}
