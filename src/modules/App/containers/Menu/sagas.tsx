import { put } from 'redux-saga/effects';
import { types } from './ducks';
import { ActionInterface } from './menu.interface';

export function* sagaMenu(action: ActionInterface) {

  const menu = [
    {
      label: 'Dashboard',
      route: '/',
    },
    {
      label: 'About',
      route: '/about',
    }
  ];

  try {
    yield put({ type: types.GET_MENU_ITEMS_SUCCESS, payload: menu });
  } catch (err) {
    yield put({ type: types.GET_MENU_ITEMS_FAILURE, payload: err });
  }
}
