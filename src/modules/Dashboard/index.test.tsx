import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import * as enzyme from 'enzyme';
import { ModuleDashboard } from './index';
import { TopAgents } from './containers/TopAgents';
import { Recommendations } from './containers/Recommendations';

enzyme.configure({ adapter: new Adapter() });

describe('Dashboard', () => {

  let wrapper: enzyme.ShallowWrapper;

  beforeEach(() => {
    wrapper = enzyme.shallow(<ModuleDashboard />);
  });

  it('TopAgents exists', () => {
    expect(wrapper.find(TopAgents)).toHaveLength(1);
  });

  it('Recommendations exists', () => {
    expect(wrapper.find(Recommendations)).toHaveLength(1);
  });

});