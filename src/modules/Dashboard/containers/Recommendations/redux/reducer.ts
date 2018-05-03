import { RecommendationsTypesEnum } from './types.enum';

const initialState = {
    data: [],
};

export const recommendations = (state = initialState, action: any) => {
    switch (action.type) {
        case RecommendationsTypesEnum.GET_RECOMMENDATIONS_REQUEST:
        case RecommendationsTypesEnum.GET_RECOMMENDATIONS_SUCCESS:
            return { ...state, data: action.payload }
        case RecommendationsTypesEnum.GET_RECOMMENDATIONS_FAILURE:

        default:
            return state;
    }
};
