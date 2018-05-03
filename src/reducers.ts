import { combineReducers } from 'redux';
import menuReducer from './modules/App/containers/Menu/ducks';
import agentsReducer from './modules/Dashboard/containers/TopAgents/ducks';
import { recommendations } from './modules/Dashboard/containers/Recommendations/redux/reducer';

export default combineReducers({
    menu: menuReducer,
    agents: agentsReducer,
    recommendations,
});
