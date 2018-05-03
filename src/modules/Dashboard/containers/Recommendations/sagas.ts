import { put } from 'redux-saga/effects'
import { actions } from './redux/actions';
import recommendations from '../../mocks/recommendations';

export function* sagaRecommendations(action: any) {
    try {
        yield put(actions.loadInitComponentDataSuccess(recommendations));
    } catch (err) {
        yield put(actions.loadInitComponentDataFailure(err));
    }
}
