import React from 'react';
import texts from 'texts';
import { isADictionary, isAnArray } from 'Utils/utilFuncs';
import { NavBar, NavButton, NavSpacer } from './styles';

export default function GeneralNavBar({ buttons, barStyle, buttonStyle, spacerStyle }) {
	const renderButtons = () => {
		if (!isAnArray(buttons) || buttons.length === 0) {
			console.log(texts.errors.invalidButtonsDictionary);
			return null;
		} else {
			let isAValidArray = true;
			buttons.forEach(button => {
				if (!isADictionary(button) || button.title === undefined || button.func === undefined) {
					console.log(texts.errors.invalidButtonsDictionary);
					isAValidArray = false;
					return null;
				}
			});
			if (isAValidArray) {
				let arrayWithSpacers = [];
				buttons.forEach((button, index) => {
					const isNotLast = index !== buttons.length - 1;
					arrayWithSpacers.push(
						<NavButton onClick={button.func} customStyle={buttonStyle} key={index * 2}>
							{button.title}
						</NavButton>,
					);
					if (isNotLast) {
						arrayWithSpacers.push(<NavSpacer customStyle={spacerStyle} key={index * 2 + 1} />);
					}
				});
				return arrayWithSpacers.map(component => {
					return component;
				});
			}
		}
	};

	return <NavBar customStyle={barStyle}>{renderButtons()}</NavBar>;
}
