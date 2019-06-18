import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

function DialogDeny(props) {
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Deny Action"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are You Sure, You Can't Undo This Action
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.deny} color="primary" autoFocus>
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

export default DialogDeny;
