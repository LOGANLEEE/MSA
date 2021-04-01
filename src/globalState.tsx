import { atom, selector } from 'recoil';
import axios from 'axios';

export const theme_info_state = atom({
	key: 'theme_info_state',
	default: { is_dark: true, dark_back_ground: '#0e161f', white_back_ground: '#6b636a' },
});

export const user_info_state = atom({
	key: 'user_info',
	default: {
		email: '',
		first_name: '',
		id: '',
		is_login: false,
		last_name: '',
		level: 5,
		locked: '',
		mobile: '',
		register_date: '',
	},
});

export const test = atom({
	key: 'test',
	default: {
		login: false,
	},
});
