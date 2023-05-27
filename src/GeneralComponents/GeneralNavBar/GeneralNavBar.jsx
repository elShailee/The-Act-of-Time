import React, { useState } from 'react';
import texts from 'texts';
import { isADictionary, isAnArray } from 'Utils/utilFuncs';
import { Bar, Button, Spacer } from './styles';

export default function GeneralNavBar({
	buttons: inputButtonsArray,
	barStyle,
	buttonStyle,
	pressedButtonStyle,
	spacerStyle,
}) {
	const validateButtonsArray = () => {
		if (!isAnArray(inputButtonsArray) || inputButtonsArray.length === 0) {
			return false;
		} else {
			inputButtonsArray.forEach(button => {
				if (!isADictionary(button) || button.title === undefined || button.func === undefined) {
					return false;
				}
			});
		}
		return true;
	};

	const [pressedButton, setPressedButton] = useState(0);

	const renderButtons = () => {
		const isButtonsArrayValid = validateButtonsArray();
		if (!isButtonsArrayValid) {
			console.log(texts.errors.invalidButtonsArray);
		} else {
			let assembledButtonsArray = [];
			inputButtonsArray.forEach((button, index) => {
				assembledButtonsArray.push(
					<Button
						onClick={() => {
							setPressedButton(index);
							button.func();
						}}
						customStyle={buttonStyle}
						customPressedStyle={pressedButton === index ? pressedButtonStyle : null}
						key={index * 2}
					>
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
