import { all, call, put, fork } from 'redux-saga/effects'

import { DashboardMockService } from '../../services/DashboardMockService';
import { DashboardFilterService } from '../../services/DashboardFilterService';

import { RecommendationsTypesEnum } from '../../containers/Recommendations/redux/types.enum';
import { types as agentsTypes } from '../../containers/TopAgents/ducks';

export function* fetchAgents(rowsNumber: number | null) {
    const response = yield call(DashboardMockService.getAgentsMock);
    const data = yield call(DashboardFilterService.dataFilter, response, rowsNumber);

    yield put({ type: agentsTypes.GET_TOP_AGENTS_SUCCESS, payload: data })
}

export function* fetchRecommendations(rowsNumber: number | null) {
    const response = yield call(DashboardMockService.getRecommendationsMock);
    const data = yield call(DashboardFilterService.dataFilter, response, rowsNumber);

    yield put({ type: RecommendationsTypesEnum.GET_RECOMMENDATIONS_SUCCESS, payload: data });
}

export function* fetchAll(rowsNumber: number | null) {
    yield all([
        fork(fetchAgents, rowsNumber),
        fork(fetchRecommendations, rowsNumber)
    ]);
}

export function* sagaRows(action: any) {
    yield call(fetchAll, action.payload);
}
