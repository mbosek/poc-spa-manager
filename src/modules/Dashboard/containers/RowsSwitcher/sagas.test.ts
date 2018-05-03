import { all, call, put, fork } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import { DashboardMockService } from '../../services/DashboardMockService';
import { DashboardFilterService } from '../../services/DashboardFilterService';
import { fetchAgents, fetchAll, fetchRecommendations, sagaRows } from './sagas';
import { actions } from './redux/actions';
import { types as agentsTypes } from '../../containers/TopAgents/ducks';
import { RecommendationsTypesEnum } from '../../containers/Recommendations/redux/types.enum';


describe('Fetch method', () => {

  const NUMBER_OF_ROWS = 2;

  describe('Fetch agents method', () => {
    const generator = cloneableGenerator(fetchAgents)(NUMBER_OF_ROWS);

    const users = [
      { username: 'Joe' },
    ];

    it('calls the Agents Service', () => {
      const result = generator.next().value;
      expect(result).toEqual(call((DashboardMockService.getAgentsMock)));
    });

    it('calls the Filter Service', () => {
      const result = generator.next(users).value;
      expect(result).toEqual(call(DashboardFilterService.dataFilter, users, NUMBER_OF_ROWS));
    });

    it('raises success action', () => {
      const result = generator.next(users).value;
      expect(result).toEqual(put({ type: agentsTypes.GET_TOP_AGENTS_SUCCESS, payload: users }));
    });

  });

  describe('Fetch recommendations method', () => {
    const generator = cloneableGenerator(fetchRecommendations)(NUMBER_OF_ROWS);

    const users = [
      { username: 'Joe' },
    ];

    it('calls the Agents Service', () => {
      const result = generator.next().value;
      expect(result).toEqual(call((DashboardMockService.getRecommendationsMock)));
    });

    it('calls the Filter Service', () => {
      const result = generator.next(users).value;
      expect(result).toEqual(call(DashboardFilterService.dataFilter, users, NUMBER_OF_ROWS));
    });

    it('raises success action', () => {
      const result = generator.next(users).value;
      expect(result).toEqual(put({ type: RecommendationsTypesEnum.GET_RECOMMENDATIONS_SUCCESS, payload: users }));
    });

  });

  describe('Fetch all', () => {
    const generator = cloneableGenerator(fetchAll)(NUMBER_OF_ROWS);

    it('run forks in all effect', () => {
      const result = generator.next().value;
      expect(result).toEqual(all([
        fork(fetchAgents, NUMBER_OF_ROWS),
        fork(fetchRecommendations, NUMBER_OF_ROWS)
      ]));
    });

  });

  describe('Saga rows', () => {

    describe('and the request fails', () => {

      it('raises call fetchAll with number param', () => {
        const generator = cloneableGenerator(sagaRows)(actions.changeNumberOfRows(NUMBER_OF_ROWS));
        const result = generator.next().value;
        expect(result).toEqual(call(fetchAll, NUMBER_OF_ROWS));
        const done = generator.next().done;
        expect(done).toBe(true);

      });

      it('raises call fetchAll without number param', () => {
        const generator = cloneableGenerator(sagaRows)(actions.changeNumberOfRows(null));
        const result = generator.next().value;
        expect(result).toEqual(call(fetchAll, null));
        const done = generator.next().done;
        expect(done).toBe(true);
      });

    });

  });

});
