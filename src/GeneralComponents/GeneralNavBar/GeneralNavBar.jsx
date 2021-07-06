import React from 'react';
import texts from 'texts';
import { checkIfDictionary, checkIfArray } from 'Utils/utilFuncs';
import { Bar, Button, Spacer } from './styles';

export default function GeneralNavBar({ buttonsArray: inputButtonsArray, barStyle, buttonStyle, spacerStyle }) {
	const validateButtonsArray = () => {
		if (!checkIfArray(inputButtonsArray) || inputButtonsArray.length === 0) {
			return false;
		} else {
			inputButtonsArray.forEach(button => {
				if (!checkIfDictionary(button) || button.title === undefined || button.func === undefined) {
					return false;
				}
			});
		}
		return true;
	};

	const renderButtons = () => {
		const isButtonsArrayValid = validateButtonsArray();
		if (!isButtonsArrayValid) {
			console.log(texts.errors.invalidButtonsArray);
		} else {
			let assembledButtonsArray = [];
			inputButtonsArray.forEach((button, index) => {
				assembledButtonsArray.push(
					<Button onClick={button.func} customStyle={buttonStyle} key={index * 2}>
						{button.title}
					</Button>,
				);
				const isNotLastButton = index !== inputButtonsArray.length - 1;
				if (isNotLastButton) {
					assembledButtonsArray.push(<Spacer customStyle={spacerStyle} key={index * 2 + 1} />);
				}
			});
			return assembledButtonsArray;
		}
	};

	return <Bar customStyle={barStyle}>{renderButtons()}</Bar>;
}
