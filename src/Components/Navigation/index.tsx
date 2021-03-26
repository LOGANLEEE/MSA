import { Button } from '@material-ui/core';
import React from 'react';
import { Wrapper } from './Wrapper';

export const Navigation = () => {
	return (
		<Wrapper>
			<Button className='item' variant='contained' color='primary'>
				Honored Academy
			</Button>
			<Button className='item' variant='contained' color='secondary'>
				Dishonored Academy
			</Button>
			<Button className='item' variant='contained' color='default'>
				News
			</Button>
			<Button className='item' variant='contained' color='default'>
				Community
			</Button>
			<Button className='item' variant='contained' color='primary' href='#contained-buttons'>
				Q&A
			</Button>
		</Wrapper>
	);
};
