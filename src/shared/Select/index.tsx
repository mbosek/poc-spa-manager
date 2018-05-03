import * as React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const Select = (props: any) => (
  <FormGroup>
    <Label for="emirate">Select</Label>
    <Input type="select" name="emirate" onChange={props.onChange}>
      <option value="DUBAI">Dubai</option>
      <option value="ABU_DHABI">Ahu Dabi</option>
    </Input>
  </FormGroup>
)

export default Select;
