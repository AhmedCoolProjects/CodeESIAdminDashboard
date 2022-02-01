import { useMutation } from "@apollo/client";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from "@mui/material";
import { DELETE_PERSON } from "apollo/graphql/mutations";
import { GET_PEOPLE } from "apollo/graphql/queries";

export default function DeleteDialog({
  open,
  handleClose,
  title,
  description,
  personToDeleteId,
  lastMsg,
}) {
  // function to handle the data upload using apollo client mutations
  const [handleDelete, { data, loading, error }] = useMutation(DELETE_PERSON, {
    variables: {
      deletePersonId: personToDeleteId,
    },
    onCompleted: () => {
      handleClose();
      alert(lastMsg);
    },
    onError: (error) => {
      console.log(error);
    },
    refetchQueries: [
      {
        query: GET_PEOPLE,
      },
    ],
  });
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>cancel</Button>
        <Button
          style={{
            color: "red",
          }}
          onClick={handleDelete}
          autoFocus
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
