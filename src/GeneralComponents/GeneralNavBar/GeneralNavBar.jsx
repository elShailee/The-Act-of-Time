import React from 'react';
import texts from 'texts';
import { isADictionary, isAnArray } from 'Utils/utilFuncs';
import { NavBar, NavButton, Spacer } from './styles';

export default function GeneralNavBar({ buttons }) {
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
						<NavButton onClick={button.func} key={index * 2}>
							{button.title}
						</NavButton>,
					);
					if (isNotLast) {
						arrayWithSpacers.push(<Spacer key={index * 2 + 1} />);
					}
				});
				return arrayWithSpacers.map(component => {
					return component;
				});
			}
		}
	};

	return <NavBar>{renderButtons()}</NavBar>;
}
