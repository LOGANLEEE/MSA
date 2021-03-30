import React, { FunctionComponent } from 'react';
import { Wrapper, StyledButton } from './Wrapper';

import { Button } from '@material-ui/core';

interface Props {}

export const Navigation: FunctionComponent = ({}: Props) => {
	return (
		<Wrapper>
			<StyledButton className='item'>Academy</StyledButton>
			<StyledButton className='item'>News</StyledButton>
			<StyledButton className='item'>Community</StyledButton>
			<StyledButton className='item'>Q&A</StyledButton>
		</Wrapper>
	);
};
