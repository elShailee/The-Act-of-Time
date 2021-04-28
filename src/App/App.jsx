import React from 'react';
import './App.css';
import GameplayScreen from 'Screens/Gameplay/GameplayScreen';
import RenderIfBrowserValidHOC from 'App/RenderIfBrowserValidHOC';
import store from 'Redux/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';

const App = () => (
	<RenderIfBrowserValidHOC>
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<GameplayScreen />
			</Provider>
		</ThemeProvider>
	</RenderIfBrowserValidHOC>
);

export default App;
