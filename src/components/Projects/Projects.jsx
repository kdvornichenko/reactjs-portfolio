import ProjectsCards from './ProjectsCards'

const Projects = () => {
	return (
		<div id="projects" className="max-w-7xl mt-6 mx-auto px-4 md:px-20">
			<h2 className="font-bold text-[#001b5e] text-center"> Мои проекты</h2>
			<p className="mt-4 text-lg text-center md:text-xl">
				Каждый день я совершенствую свои навыки, учу что-то новое и практикую
				старое, смотрю видео и читаю статьи. Можно долго описывать свои сильные
				и слабые стороны, чем я отлично владею, что знаю хорошо, а что мне еще
				учить и учить, но все это видно в моих проектах (некоторые проекты еще в
				процессе разработки)
			</p>
			<ProjectsCards />
		</div>
	)
}

export default Projects
