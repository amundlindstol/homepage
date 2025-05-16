'use client'

import React, { useEffect, useRef, useState } from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'
import * as THREE from 'three'

export const Vanta = () => {
	const [vantaEffect, setVantaEffect] = useState(0)
	const vantaRef = useRef(null)

	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(
				BIRDS({
					el: vantaRef.current,
					THREE: THREE,
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
			)
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy()
		}
	}, [vantaEffect])
	return <div id={'vanta-bg'} ref={vantaRef} className={'fixed top-0 -z-6 h-screen w-full'}></div>
}
