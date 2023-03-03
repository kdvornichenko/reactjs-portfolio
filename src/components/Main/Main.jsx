import { TypeAnimation } from 'react-type-animation'

import './Main.css'
import Socials from './Socials/Socials'

const Main = () => {
	return (
		<section id="main" className="p-4 w-full h-screen relative bg-blueBG">
			<div className="max-w-3xl m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
				<h1 className="text-center text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl">
					Привет! Меня зовут Кирилл
				</h1>
				<h2 className="mt-2 flex text-2xl sm:text-3xl md:text-4xl md:mt-4 md:gap-1 ">
					Я -
					<TypeAnimation
						sequence={[
							'Fronted разработчик',
							1000,
							'HTML верстальщик',
							1000,
							'Freelancer',
							1000,
						]}
						wrapper="div"
						cursor={true}
						repeat={Infinity}
						style={{ paddingLeft: '5px', fontSize: '1em' }}
					/>
				</h2>
				<div className="mt-2 flex items-center justify-center gap-1 sm:gap-2 md:gap-3 md:mt-4">
					<Socials />
				</div>
			</div>
			<div>
				<div className="wave wave1"></div>
				<div className="wave wave2"></div>
				<div className="wave wave3"></div>
				<div className="wave wave4"></div>
			</div>
		</section>
	)
}

export default Main
