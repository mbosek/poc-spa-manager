import * as React from 'react';
import { TopAgents } from './containers/TopAgents';
import { Recommendations } from './containers/Recommendations';
import { RowsSwitcher } from './containers/RowsSwitcher';

export const ModuleDashboard = () => (
  <div>
    <h2>Dashboard</h2>
    <RowsSwitcher />
    <Recommendations />
    <TopAgents />
  </div>
);
