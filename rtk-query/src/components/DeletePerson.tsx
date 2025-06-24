import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

type DeletePersonProps = {
    id: string;
}
const DeletePerson = ({ id } : DeletePersonProps) => {

    const handleDelete = () => {
        console.log("Delete person with id: ", id);
    }

  return (
    <IconButton aria-label="edit"
        onClick={() => handleDelete()}
    >
        <DeleteIcon color="error"/>
    </IconButton>
  )
}

export default DeletePerson