/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			animation: {
				wave: 'wave linear infinite',
				'wave-reverse': 'wave-reverse linear infinite',
			},
			animationDelay: {
				'0s': '0s',
				'-2s': '-2s',
				'-5s': '-5s',
			},
			animationDuration: {
				'5s': '5s',
				'10s': '10s',
				'15s': '15s',
				'20s': '20s',
			},
			backgroundImage: {
				wave: 'url("/src/assets/wave.png")',
				sultanShopImg: 'url("/src/assets/sultan-shop.png")',
				coffeeHouseImg: 'url("/src/assets/coffee-house.png")',
				conquestWatchShopImg: 'url("/src/assets/conquest-watch-shop.png")',
				dashboardImg: 'url("/src/assets/dashboard.png")',
				githubImg: 'url("/src/assets/github.png")',
				sneakersShopImg: 'url("/src/assets/sneakers-shop.png")',
				weikaTeachImg: 'url("/src/assets/weika-teach.png")',
			},
			colors: {
				blueBG: '#4779f7',
			},
			keyframes: {
				wave: {
					'0%': {
						'background-position-x': 0,
					},
					'100%': {
						'background-position-x': '100vw',
					},
				},
				'wave-reverse': {
					'0%': {
						'background-position-x': 0,
					},
					'100%': {
						'background-position-x': '-100vw',
					},
				},
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}
