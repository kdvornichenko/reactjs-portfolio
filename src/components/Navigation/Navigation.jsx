import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

import NavList from '../NavList/NavList'

import './Navigation.css'

const Navigation = () => {
	const [nav, setNav] = useState(false)

	const ref = useRef(null)

	const handleNav = () => {
		window.innerWidth <= 768 && setNav(!nav)
		ref.current.className == 'mobile' &&
			document.body.classList.toggle('overflow-hidden')
	}

	const setClass = async () => {
		if (window.innerWidth >= 768) {
			await setNav(true)
			ref.current.className = 'desktop'
		} else {
			await setNav(false)
			ref.current.className = 'mobile'
		}
	}

	useEffect(() => {
		setClass()
	}, [])

	useLayoutEffect(() => {
		window.addEventListener('resize', () => {
			setClass()
		})
	}, [])

	return (
		<div className="relative z-50">
			<AiOutlineMenu
				onClick={handleNav}
				className="fixed top-4 right-4 z-[99] md:hidden"
			/>
			<div className={nav ? 'h-full' : 'h-0'}>
				<div ref={ref}>
					<NavList handleNav={handleNav} />
				</div>
			</div>
		</div>
	)
}

export default Navigation
