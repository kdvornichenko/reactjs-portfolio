import { useEffect, useLayoutEffect, useRef, useState } from 'react'

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
			{/* <AiOutlineMenu
				
			/> */}
			<div
				onClick={handleNav}
				className={
					(nav
						? 'before:mt-0 before:rotate-45 after:-rotate-45 after:mb-0'
						: '') +
					' ' +
					'fixed top-4 right-4 flex items-center justify-center z-[99] cursor-pointer md:hidden before:absolute before:-mt-3  before:left-0 before:bg-black before:w-full before:h-full before:transition-all after:absolute after:left-0 after:-mb-3 after:bg-black after:w-full after:h-full after:transition-all'
				}
			>
				<span
					className={
						(nav ? 'bg-opacity-0 ' : '') +
						'block bg-black h-0.5 w-5 relative transition-all '
					}
				></span>
			</div>
			<div className={nav ? 'h-full' : 'h-0'}>
				<div ref={ref}>
					<NavList handleNav={handleNav} />
				</div>
			</div>
		</div>
	)
}

export default Navigation
