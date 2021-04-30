import './DiscoveryWindow.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import React from 'react';

export default function DiscoveryWindowTitle() {
	return (
		<ButtonToolbar aria-label='Toolbar with button groups'>
			<ButtonGroup className='cook' aria-label='First group'>
				<Button>Craft</Button> <Button>Cook</Button> <Button>Harvest</Button> <Button>Mix</Button> <Button>Breed</Button>
			</ButtonGroup>
		</ButtonToolbar>
	);
}
