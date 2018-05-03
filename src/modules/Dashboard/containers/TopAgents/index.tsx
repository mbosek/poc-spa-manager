import * as React from 'react';
import { Input, FormGroup, Label } from 'reactstrap';
import { actions } from './ducks';
import withConnectLifecycle from '../../../../utils/withConnectLifecycle';
import { AgentCard } from './components/AgentCard';
import './index.css';

class TopAgentsContainer extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      agents: []
    }
  }

  shouldComponentUpdate(nextProps: any, nextState: any){
    if(nextProps.agents.data !== this.state.agents) {
      this.setState({ agents: nextProps.agents.data })
      return true
    }
    return true;
  }

  handleFilterAgent = (e: any) => {
    let updatedList = this.props.agents ? this.props.agents.data : null;

    this.setState({
      agents: updatedList.filter((item: any) => item.profile.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1),
    });
  }

  render() {
    let agents = [];
    if (this.state.agents.length === 0) {
      agents = this.props.agents && this.props.agents.data
    } else {
      agents = this.state.agents
    }

    return (
      <div>
        <h4>Top Agents</h4>

        <FormGroup>
          <Label for="filterAgent">Name</Label>
          <Input
            type="text"
            name="agent"
            id="filterAgent"
            placeholder="Agent name"
            onChange={this.handleFilterAgent}
          />
        </FormGroup>

        {agents.map((agent: any, i: number) => <AgentCard agent={agent} key={`agent-${i}`}/>)}
      </div>
    );
  }
}

export const TopAgents = withConnectLifecycle(TopAgentsContainer, ['agents'], actions);
