import React from "react";
// import { withStyles } from '@material-ui/core/styles';
// import { green } from '@material-ui/core/colors';
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

// const GreenCheckbox = withStyles({
//   root: {
//     color: green[400],
//     '&$checked': {
//       color: green[600],
//     },
//   },
//   checked: {},
// })(props => <Checkbox color="default" {...props} />);

export default function CheckboxLabels(props) {
  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            checked={props.checked}
            onChange={props.handleChange}
            value="true"
            color="primary"
          />
        }
        label="Notify Me When Product Ready"
      />
    </FormGroup>
  );
}
