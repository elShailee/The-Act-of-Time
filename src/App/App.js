import React from 'react';
import GameplayScreen from 'Screens/GameplayScreen/GameplayScreen';
import RenderIfBrowserValidHOC from 'App/RenderIfBrowserValidHOC';
import store from 'Redux/store';
import { Provider } from 'react-redux';

const App = () => (
	<Provider store={store}>
		<RenderIfBrowserValidHOC>
			<GameplayScreen />
		</RenderIfBrowserValidHOC>
	</Provider>
);

export default App;
