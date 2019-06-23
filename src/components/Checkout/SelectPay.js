import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300
  }
}));

function SelectPay(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    transfer: ""
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(2);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      transfer: event.target.value
    }));

    props.payment(event.target.value);
  }

  const paylistDisplay = () => {
    // console.log(props.paylist);
    return props.paylist.map(item => {
      return (
        <MenuItem key={item.paymentId} value={item.paymentId}>
          <img
            alt="bank name"
            src={`http://localhost:8080/paypict/${item.paymentImg}`}
            className="paypict"
          />
        </MenuItem>
      );
    });
  };
  return (
    <form className={classes.root} autoComplete="off">
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-trf-simple">
          <strong>Transfer Bank</strong>
        </InputLabel>
        <Select
          value={values.transfer}
          onChange={handleChange}
          // open={true}
          input={
            <OutlinedInput
              labelWidth={labelWidth}
              name="transfer"
              id="outlined-trf-simple"
            />
          }
        >
          {paylistDisplay()}
        </Select>
      </FormControl>
    </form>
  );
}

export default SelectPay;
