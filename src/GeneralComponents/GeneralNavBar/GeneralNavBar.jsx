import React from 'react';
import texts from 'texts';
import { checkIfDictionary, checkIfArray } from 'Utils/utilFuncs';
import { Bar, Button, Spacer } from './styles';

export default function GeneralNavBar({ buttonsArray, barStyle, buttonStyle, spacerStyle }) {
	const validateButtonsArray = buttonsInput => {
		if (!checkIfArray(buttonsInput) || buttonsInput.length === 0) {
			return false;
		} else {
			buttonsInput.forEach(button => {
				if (!checkIfDictionary(button) || button.title === undefined || button.func === undefined) {
					return false;
				}
			});
		}
		return true;
	};

	const renderButtons = () => {
		const isButtonsArrayValid = validateButtonsArray(buttonsArray);
		if (!isButtonsArrayValid) {
			console.log(texts.errors.invalidButtonsArray);
		} else {
			let buttonsArrayWithSpacers = [];
			buttonsArray.forEach((button, index) => {
				buttonsArrayWithSpacers.push(
					<Button onClick={button.func} customStyle={buttonStyle} key={index * 2}>
						{button.title}
					</Button>,
				);
				const isNotLastButton = index !== buttonsArray.length - 1;
				if (isNotLastButton) {
					buttonsArrayWithSpacers.push(<Spacer customStyle={spacerStyle} key={index * 2 + 1} />);
				}
			});
			return buttonsArrayWithSpacers;
		}
	};

	return <Bar customStyle={barStyle}>{renderButtons()}</Bar>;
}
