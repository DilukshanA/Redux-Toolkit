import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDeletePersonMutation } from '../redux/reducers/personApiSlice';
import CustomSnackbar from './ui/CustomSnackbar';
import { useState } from 'react';
import type { SnackbarCloseReason } from "@mui/material/Snackbar";

type DeletePersonProps = {
    id: string;
}
const DeletePerson = ({ id } : DeletePersonProps) => {


    const [ deletePerson, { isLoading, isSuccess, isError, error} ] = useDeletePersonMutation();

    const handleDelete = async () => {
        try {
            await deletePerson(id).unwrap(); // unwrap to get the result or error
            setOpen(true);
        } catch (error) {
            setOpen(true);
        }
    }

    const [open, setOpen] = useState(false);

    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason
    ) => {
        if (reason === 'clickaway') return;
        setOpen(false);
    };

  return (
    <div>
        <IconButton aria-label="edit"
            onClick={() => handleDelete()}
        >
            <DeleteIcon color="error"/>
        </IconButton>
        <CustomSnackbar
            open={open} // This should be managed by the parent component
            message={isSuccess ? "Person deleted successfully" : (isError && error && 'status' in error) ? `Error: ${error.data}` : ""}
            severity={isSuccess ? "success" : "error" }
            autoHideDuration={3000} // Auto hide after 3 seconds
            onClose={handleClose} // Handle close in parent component
        />
    </div>
  )
}
// severity={isSuccess ? "success" : isError ? "error" : "info"}
export default DeletePerson