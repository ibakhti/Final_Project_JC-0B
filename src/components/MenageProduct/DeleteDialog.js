import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

function DeleteDialog(props) {
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Product"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please Consult With Your Administrator Before Delete Product, Are
            You Sure to Delete This Product?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.deleteItem} color="primary" autoFocus>
            <strong>Yes</strong>
          </Button>
          <Button onClick={props.handleClose} color="secondary" autoFocus>
            <strong>Cancel</strong>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DeleteDialog;
