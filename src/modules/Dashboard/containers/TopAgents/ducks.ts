export const types = {
	GET_TOP_AGENTS_REQUEST: 'GET_TOP_AGENTS_REQUEST',
	GET_TOP_AGENTS_SUCCESS: 'GET_TOP_AGENTS_SUCCESS',
	GET_TOP_AGENTS_FAILURE: 'GET_TOP_AGENTS_FAILURE',
};

export const initialState = {
	data: [],
};

export default (state = initialState, action: any) => {
	switch (action.type) {
		case types.GET_TOP_AGENTS_REQUEST:
		case types.GET_TOP_AGENTS_SUCCESS:
			return { ...state, data: action.payload }
		case types.GET_TOP_AGENTS_FAILURE:

		default:
			return state;
	}
};

export const actions = {
	loadInitComponentData: () => ({ type: types.GET_TOP_AGENTS_REQUEST }),
	loadInitComponentDataSuccess: (payload: any) => ({ type: types.GET_TOP_AGENTS_SUCCESS, payload }),
	loadInitComponentDataError: (error: Error) => ({ type: types.GET_TOP_AGENTS_SUCCESS, error }),
};
