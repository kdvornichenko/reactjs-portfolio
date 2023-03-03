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
				wave: 'url("./wave.png")',
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
