import styled from 'styled-components';
import { animated } from 'react-spring';

export const Wrapper = styled(animated.div)`
	min-height: 100vh;
	min-width: 100vw;
	overflow-y: scroll;

	display: flex;
	flex-direction: row;
	background-color: ${({ theme: { is_dark, dark_back_ground, white_back_ground } }) =>
		is_dark ? dark_back_ground : white_back_ground};

	.app-block1 {
		width: 10%;
		cursor: pointer;
		padding: 1%;
		font-size: 5vw;
		font-family: fantasy;
		font-weight: bold;
		overflow-x: hidden;
	}

	.app-block2 {
		width: 90%;

		.header {
			padding: 1% 0% 1% 0%;
			height: 6%;
		}
		.body {
			height: 90%;
		}
		.footer {
			height: 2%;
			/* background-color: #131f4c59; */
		}
	}

	/* @media only screen and (max-width: 600px) {
		.header {
			height: 20vh;
		}
		.body {
			height: 70vh;
		}
		.footer {
			height: 10vh;
		} */
	/* } */
`;
