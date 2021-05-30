import React from 'react';
import characterInfo from 'ExampleData/characterInfoExampleData';
import { BarContainer, BarBG, NameText, LevelText, Image, XPCapacity, XPQuantity, TextCointainer } from './styles';

export default function characterInfoBar() {
	return (
		<BarContainer id='characterInfoBarContainer'>
			<XPCapacity />
			<XPQuantity />
			<BarBG>
				<TextCointainer>
					<NameText>{characterInfo.characterName} </NameText>
					<LevelText>Lvl {characterInfo.characterLevel} </LevelText>
				</TextCointainer>
				<Image />
			</BarBG>
		</BarContainer>
	);
}
