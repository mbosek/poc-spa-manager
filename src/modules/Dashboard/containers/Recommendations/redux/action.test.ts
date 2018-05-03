import { RecommendationsTypesEnum } from './types.enum';
import { actions } from './actions';

describe('Recommendations ducks', () => {
    it('should create an action to loadInitComponentData', () => {
        const expectedAction = {
            type: RecommendationsTypesEnum.GET_RECOMMENDATIONS_REQUEST,
        }
        expect(actions.loadInitComponentData()).toEqual(expectedAction);
    })
})