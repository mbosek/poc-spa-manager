import { call, put } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import { DashboardMockService } from '../../services/DashboardMockService';
import { sagaTopAgents } from './sagas';
import { actions } from './ducks';

describe('with redux-saga native testing', () => {
  const generator = cloneableGenerator(sagaTopAgents)(actions.loadInitComponentData());
  const user = { username: 'sam', isAdmin: true };

  it('calls the API', () => {
    const result = generator.next().value;

    expect(result).toEqual(call((DashboardMockService.getAgentsMock)));
  });

  describe('and the request is successful', () => {
    let clone: any;

    beforeAll(() => {
      clone = generator.clone();
    });

    it('raises success action', () => {
      const result = clone.next(user).value;
      expect(result).toEqual(put(actions.loadInitComponentDataSuccess(user)));
    });

    it('performs no further work', () => {
      const result = clone.next().done;
      expect(result).toBe(true);
    });
  });

  describe('and the request fails', () => {
    let clone: any;

    beforeAll(() => {
      clone = generator.clone();
    });

    it('raises failed action', () => {
      const error = new Error("404 Not Found");
      const result = clone.throw(error).value;
      expect(result).toEqual(put(actions.loadInitComponentDataError(error)));
    });

    it('performs no further work', () => {
      const result = clone.next().done;
      expect(result).toBe(true);
    });
  });
});