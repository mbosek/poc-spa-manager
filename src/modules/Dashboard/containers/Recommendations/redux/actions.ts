import { RecommendationsTypesEnum } from './types.enum';

export const actions = {
    loadInitComponentData: () => ({
        type: RecommendationsTypesEnum.GET_RECOMMENDATIONS_REQUEST
    }),
    loadInitComponentDataSuccess: (payload: any) => ({
        type: RecommendationsTypesEnum.GET_RECOMMENDATIONS_SUCCESS, payload
    }),
    loadInitComponentDataFailure: (error: Error) => ({
        type: RecommendationsTypesEnum.GET_RECOMMENDATIONS_FAILURE, payload: error
    }),
};
