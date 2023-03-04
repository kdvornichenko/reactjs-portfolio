import NavData from '../../data/NavData'

const NavList = ({ handleNav }) => {
	return NavData.map((item) => (
		<a
			key={item.link}
			href={item.link}
			className="w-3/4 p-4 flex justify-center items-center rounded-full shadow-md shadow-gray-900 bg-gray-50 cursor-pointer  transition-all md:w-auto md:hover:scale-110 md:hover:bg-white"
			onClick={handleNav}
		>
			{item.icon}
			<span className="pl-4 md:hidden">{item.text}</span>
		</a>
	))
}

export default NavList
