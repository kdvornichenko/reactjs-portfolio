import { AiOutlineHome, AiOutlineMail, AiOutlineProject } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'

const NavData = [
	{
		icon: <AiOutlineHome size={20} />,
		link: '#main',
		text: 'Home',
	},
	{
		icon: <AiOutlineProject size={20} />,
		link: '#projects',
		text: 'Projects',
	},
	{
		icon: <BsPerson size={20} />,
		link: '#resume',
		text: 'Resume',
	},
	{
		icon: <AiOutlineMail size={20} />,
		link: '#contact',
		text: 'Contact',
	},
]

export default NavData
