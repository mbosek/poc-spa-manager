import * as React from 'react';
import { Button, Row, Col } from 'reactstrap';
import { About } from '../../shared/About';
import { ModuleDashboard } from '../Dashboard';
import { Header } from '../../shared/Header';
import { Menu } from './containers/Menu';
import { Route } from "react-router-dom";
import { PropsInterface, StateInterface } from './app.interface';
import './App.css';

export class ModuleApp extends React.Component<PropsInterface, StateInterface> {

  constructor(props: PropsInterface) {
    super(props);
    this.state = {
      showMenu: true,
    }
  }

  handleToggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu })
  }

  render() {
    return (
      <div>
        <Header />
        <div>
        <Row>
          <Col xl={12}>
            <Button 
              outline 
              color="primary" 
              className="m-3" 
              onClick={this.handleToggleMenu}
            >
              MENU
            </Button>
          </Col>
        </Row>
        <Row>
          {this.state.showMenu && <Menu />}
          <Col xl={8}>
            <Route exact path="/" component={ModuleDashboard} />
            <Route path="/about" component={About} />
          </Col>
        </Row>
        </div>
      </div>
    );
  }
}
