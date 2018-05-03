import { takeEvery } from 'redux-saga/effects'
import { types as rowsTypes } from './modules/Dashboard/containers/RowsSwitcher/redux/types';
import { sagaRows } from './modules/Dashboard/containers/RowsSwitcher/sagas';
import { types as menuTypes } from './modules/App/containers/Menu/ducks';
import { sagaMenu } from './modules/App/containers/Menu/sagas';
import { RecommendationsTypesEnum } from './modules/Dashboard/containers/Recommendations/redux/types.enum';
import { sagaRecommendations } from './modules/Dashboard/containers/Recommendations/sagas';
import { types as agentsTypes } from './modules/Dashboard/containers/TopAgents/ducks';
import { sagaTopAgents } from './modules/Dashboard/containers/TopAgents/sagas';

export default function* rootSaga() {
  yield takeEvery(RecommendationsTypesEnum.GET_RECOMMENDATIONS_REQUEST, sagaRecommendations);
  yield takeEvery(menuTypes.GET_MENU_ITEMS_REQUEST, sagaMenu);
  yield takeEvery(agentsTypes.GET_TOP_AGENTS_REQUEST, sagaTopAgents);
  yield takeEvery(rowsTypes.CHANGE_NUMBER_OF_ROWS, sagaRows);
}
