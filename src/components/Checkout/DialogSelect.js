import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

function DialogSelect(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    open: false,
    shipper: props.shipper,
    duration: props.duration
  });

  const handleChange = name => event => {
    // console.log(event.target);
    setState({ ...state, [name]: event.target.value });
  };

  function handleClickOpen() {
    setState({ ...state, open: true });
  }

  function handleClose() {
    setState({ ...state, open: false });
  }

  function handleOke() {
    props.giveShippingData(state.shipper, state.duration);
    setState({ ...state, open: false });
  }

  const displayShippers = () => {
    return props.dataShippers.map(item => {
      return (
        <MenuItem key={item.shippingId} value={item.shippingName}>
          {item.shippingName}
        </MenuItem>
      );
    });
  };

  const displayDuration = () => {
    const dsh = props.dataShipping.filter(item => {
      return state.shipper === item.shippingName;
    });
    return dsh.map(item => {
      return (
        <MenuItem
          key={item.id}
          value={`${item.duration}, price: ${item.price}`}
        >
          {`${item.duration} price: ${item.price}`}
        </MenuItem>
      );
    });
  };

  function formDuration() {
    if (state.shipper) {
      return (
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="duration-simple">Duration</InputLabel>
          <Select
            value={state.duration}
            onChange={handleChange("duration")}
            input={<Input id="duration-simple" />}
          >
            {displayDuration()}
          </Select>
        </FormControl>
      );
    } else {
      return null;
    }
  }

  return (
    <div>
      <Button onClick={handleClickOpen}>
        <strong>Select Your Shipping Method</strong>
      </Button>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={state.open}
        onClose={handleClose}
      >
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="shipper-simple">Shippers</InputLabel>
              <Select
                value={state.shipper}
                onChange={handleChange("shipper")}
                input={<Input id="shipper-simple" />}
              >
                {displayShippers()}
              </Select>
            </FormControl>
            {formDuration()}
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            <strong>Cancel</strong>
          </Button>
          <Button onClick={handleOke} color="primary">
            <strong>Ok</strong>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogSelect;
