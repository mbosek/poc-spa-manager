import { types } from './types';

export const actions = {
	changeNumberOfRows: (number: number | null) => ({ type: types.CHANGE_NUMBER_OF_ROWS, payload: number }),
};
