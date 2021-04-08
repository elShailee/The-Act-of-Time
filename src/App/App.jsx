import React from 'react';
import './App.css';
import GameplayScreen from 'Screens/Gameplay/GameplayScreen';
import RenderIfBrowserValidHOC from 'App/RenderIfBrowserValidHOC';
import store from 'Redux/store';
import { Provider } from 'react-redux';

const App = () => (
	<RenderIfBrowserValidHOC>
		<Provider store={store}>
			<GameplayScreen />
		</Provider>
	</RenderIfBrowserValidHOC>
);

export default App;
