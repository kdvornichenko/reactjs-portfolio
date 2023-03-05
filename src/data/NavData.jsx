import { AiOutlineHome, AiOutlineMail, AiOutlineProject } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { FaTelegram } from 'react-icons/fa'

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
		link: 'https://drive.google.com/file/d/19YmKVaYI0Xi9XImIBr23CrkbYfeP4BNL/view?usp=sharing',
		text: 'Resume',
	},
	{
		icon: <FaTelegram size={20} />,
		link: 'https://t.me/mercyyy813',
		text: 'Contact',
	},
]

export default NavData
