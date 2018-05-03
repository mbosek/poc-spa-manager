import * as React from 'react';
import { Col } from 'reactstrap';
import { actions } from './ducks';
import withConnectLifecycle from '../../../../utils/withConnectLifecycle';
import { MenuItem } from './components/Item';

interface Props {
  menu: any;
  children: string;
}

const MenuContainer = (props: Props) => (
  <Col xl={3}>
    <nav id="sidebar">
      <ul className="list-group">
        {props.menu.data.map((item: any, i: number) => <MenuItem item={item} key={`menu-item-${i}`} />)}
      </ul>
    </nav>
  </Col>
);

export const Menu = withConnectLifecycle(MenuContainer, ['menu'], actions);

