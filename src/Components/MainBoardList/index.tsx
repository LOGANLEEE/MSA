import React, { FunctionComponent } from 'react';
import { Wrapper } from './Wrapper';

interface Props {
	className?: string;
	title: string;
	height: number;
}

// TODO clicked list change colour for user
export const MainBoardList: FunctionComponent<Props> = ({ className, title, height }) => (
	<Wrapper height={height} className={className}>
		{title}
	</Wrapper>
);
