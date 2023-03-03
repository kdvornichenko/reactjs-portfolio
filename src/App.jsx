import React from 'react'

import './App.css'
import Main from './components/Main/Main'
import Navigation from './components/Navigation/Navigation'
import Projects from './components/Projects/Projects'

function App() {
	return (
		<div className="App">
			<Navigation />
			<Main />
			<Projects />
		</div>
	)
}

export default App
