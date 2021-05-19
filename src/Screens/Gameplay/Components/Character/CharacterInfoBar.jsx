import React from 'react';
import { getImageFromLib } from 'Utils/utilFuncs';
import characterImage from 'Assets/characterImage.png';
import characterInfo from 'ExampleData/characterInfoExampleData';
import { BarContainer, BarBG, NameText, LevelText, Image, XPCapacity, XPQuantity, TextCointainer } from './styles';

export default function characterInfoBar() {
	const onCharcterImageClick = () => {
		//this is a on click triger for the Character Info window please change when creating the window
		console.log('this trigger exist on characterInfoBar.js');
	};
	return (
		<BarContainer id='characterInfoBarContainer'>
			<XPCapacity />
			<XPQuantity />
			<BarBG>
				<TextCointainer>
					<NameText>{characterInfo.characterName} </NameText>
					<LevelText>Lvl {characterInfo.characterLevel} </LevelText>
				</TextCointainer>
				<Image
					alt='character face'
					src={getImageFromLib(characterInfo.characterImage, lib)}
					onClick={onCharcterImageClick}
				/>
			</BarBG>
		</BarContainer>
	);
}

const lib = {
	john_doe: {
		asset: characterImage,
	},
};
