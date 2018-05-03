import * as React from 'react';
import { actions } from './redux/actions';
import { Items } from './components/Items';
import withConnectLifecycle from '../../../../utils/withConnectLifecycle';

const RecommendationsContainer = (props: any) => (
  <div>
    <h4>Recommendations</h4>
    <Items items={props.recommendations.data} />
  </div>
);

export const Recommendations = withConnectLifecycle(RecommendationsContainer, ['recommendations'], actions);
