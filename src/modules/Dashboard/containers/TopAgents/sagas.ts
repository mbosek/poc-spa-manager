import { call, put } from 'redux-saga/effects'
import { DashboardMockService } from '../../services/DashboardMockService';
import { actions } from './ducks';

// const request = async () => {
//   const AUTH_TOKEN = localStorage.getItem('AUTH_TOKEN');
//   const response = await fetch('https://staging.esimsar.com/manager/manager-api/dashboard/TopAgents?filter[client_id]=2501', {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/vnd.api+json',
//         'Authorization': 'Basic cGZ1c2VyOmlzaG9vZ2VIaWV2OEFsYWw=',
//         'X-Pf-JWT': `Bearer ${AUTH_TOKEN}`
//     }});
//     const json = await response.json();
//     return json;
//   }



export function* sagaTopAgents(action: any) {
    try {
        const agents = yield call(DashboardMockService.getAgentsMock);
        yield put(actions.loadInitComponentDataSuccess(agents));
    } catch (err) {
        yield put(actions.loadInitComponentDataError(err));
    }
}
