import React from "react";
import Snackbar from "@material-ui/core/Snackbar";

const SnackBar = props => {
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        key="top left"
        open={props.open}
        autoHideDuration={6000}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={<span id="message-id">{props.message}</span>}
      />
    </div>
  );
};

export default SnackBar;
