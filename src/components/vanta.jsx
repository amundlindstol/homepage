'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

export default function Vanta() {
	const [threeLoaded, setThreeLoaded] = useState(false)
	const [vantaLoaded, setVantaLoaded] = useState(false)

	const setVanta = () => {
		if (window.VANTA && threeLoaded && vantaLoaded) {
			window.VANTA.BIRDS({
				el: '#html',
				color1: 0x890000,
				color2: 0x7898,
				mouseControls: true,
				touchControls: true,
				gyroControls: false,
				minHeight: 200.0,
				minWidth: 200.0,
				scale: 1.0,
				birdSize: 1.0,
				scaleMobile: 1.0,
				speedLimit: 4.0,
				backgroundAlpha: 0.0,
				quantity: 3.0,
			})
		}
	}

	useEffect(() => {
		setVanta()
	}, [threeLoaded, vantaLoaded])

	return (
		<>
			<Script
				src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
				async={true}
				onLoad={() => setThreeLoaded(true)}
			></Script>
			<Script
				src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js"
				async={true}
				onLoad={() => setVantaLoaded(true)}
			></Script>
		</>
	)
}
