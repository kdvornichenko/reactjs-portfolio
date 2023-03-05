import ProjectsData from '../../data/ProjectsData'

const ProjectsCards = () => {
	return (
		<div className="mt-6 relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{ProjectsData.map((item) => (
				<div
					className={`relative bg-${item.image} bg-center bg-cover rounded-3xl shadow-xl overflow-hidden isolate hover:[&>.info]:opacity-100`}
					style={{ WebkitBorderRadius: '1.5rem' }}
					key={item.title}
				>
					<div className="info px-2 py-4 relative w-full h-full flex flex-col gap-2 items-center justify-center bg-blueBG/60 backdrop-blur-sm opacity-0 transition-opacity z-10 sm:gap-4 md:py-8">
						<h3 className="text-center text-2xl font-bold text-gray-100 tracking-wider sm:text-3xl">
							{item.title}
						</h3>
						<div className="text-white text-xl font-medium">
							{item.description}
						</div>
						<a
							href={item.link}
							target="_blank"
							className="px-4 py-2 rounded-md bg-white transition-all hover:bg-gray-300"
						>
							Перейти
						</a>
					</div>
				</div>
			))}
			<span className="bg-githubImg bg-weikaTeachImg bg-conquestWatchShopImg bg-coffeeHouseImg bg-dashboardImg bg-sneakersShopImg hidden"></span>
		</div>
	)
}

export default ProjectsCards
