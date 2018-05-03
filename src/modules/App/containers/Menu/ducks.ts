import { ActionInterface } from './menu.interface';

export const types = {
	GET_MENU_ITEMS_REQUEST: 'GET_MENU_ITEMS_REQUEST',
	GET_MENU_ITEMS_SUCCESS: 'GET_MENU_ITEMS_SUCCESS',
	GET_MENU_ITEMS_FAILURE: 'GET_MENU_ITEMS_FAILURE',
};

export const initialState = {
	data: [],
};

export default (state = initialState, action: ActionInterface) => {
	switch (action.type) {
		case types.GET_MENU_ITEMS_REQUEST:
		case types.GET_MENU_ITEMS_SUCCESS:
			return { ...state, data: action.payload }
		case types.GET_MENU_ITEMS_FAILURE:

		default:
			return state;
	}
};

export const actions = {
	loadInitComponentData: () => ({ type: types.GET_MENU_ITEMS_REQUEST }),
};
