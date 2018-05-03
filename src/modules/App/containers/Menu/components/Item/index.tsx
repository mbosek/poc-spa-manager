import * as React from 'react';
import { Link } from 'react-router-dom';
import { MenuInterface } from '../../menu.interface';

export const MenuItem = (props: MenuInterface) => (
  <li className="list-group-item" key={`${props.item.label}`}>
    <Link to={props.item.route}>{props.item.label}</Link>
  </li>
);
