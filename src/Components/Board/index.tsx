import React, { FunctionComponent } from 'react';
import { Wrapper } from './Wrapper';

interface Props {
	className?: string;
	menu: string;
}

export const Board: FunctionComponent<Props> = ({ className, children, menu }) => {
	return (
		<Wrapper className={className}>
			<div>{menu}</div>
			<div className='list'>{children}</div>
		</Wrapper>
	);
};
