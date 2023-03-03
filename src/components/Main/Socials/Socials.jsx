import SocialsData from '../../../data/SocialsData'

const Socials = () => {
	return SocialsData.map((item) => (
		<a
			href={item.link}
			target="_blank"
			className="block w-fit [&>svg]:w-7 [&>svg]:h-7 p-2 rounded-full bg-transparent transition-all hover:bg-gray-100 hover:shadow-md hover:scale-110 hover:shadow-gray-900 sm:[&>svg]:w-8 sm:[&>svg]:h-8"
			key={item.title}
		>
			{item.icon}
		</a>
	))
}

export default Socials
