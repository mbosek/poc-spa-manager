import * as React from 'react';
import { connect } from 'react-redux';
import { Input, FormGroup, Label } from 'reactstrap';
import { actions } from './redux/actions';

class RowsSwitcherContainer extends React.Component<any, any> {

  handleChangeOfRows = (e: any) => {
    if (e.target.value !== ''){
      this.props.changeNumberOfRows(parseInt(e.target.value));
    } else {
      this.props.changeNumberOfRows(null);
    }
  }

  render() {
    return (
      <div>
        <h4>Rows Switcher</h4>

        <FormGroup>
          <Label for="rows">Number of rows</Label>
          <Input
            type="number"
            name="rows"
            id="rows"
            placeholder="Number of rows"
            onChange={this.handleChangeOfRows}
          />
        </FormGroup>

      </div>
    );
  }
}

export const RowsSwitcher = connect(null, actions)(RowsSwitcherContainer)
