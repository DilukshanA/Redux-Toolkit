import { Box, Button, TextField, Typography } from "@mui/material"
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert'
import type { SnackbarCloseReason } from "@mui/material/Snackbar";
import { useState } from "react";
import { useAddPersonMutation } from "../redux/reducers/personApiSlice";
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

type PersonType = {
    name: string;
    age: number;
    email: string;
}

const AddPerson = () => {

    const [person, setPerson] = useState<PersonType>({
        name: "",
        age: 0,
        email: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPerson({
            ...person,
            [e.target.id]: e.target.value
        })
    }

    // console.log("person : ", person);

    const [addPerson, { isLoading, isError, isSuccess ,error}] = useAddPersonMutation();

    const handleSubmit = async () => {
        try {
            await addPerson(person).unwrap();
            setOpen(true);
        } catch (error) {
            setOpen(true);
        }
    }

    if (isError && error && 'status' in error) {
        const fetchError = error as FetchBaseQueryError;
        console.error("Error status: ", fetchError.status);
        console.error("Error data: ", fetchError.data);
    }


      const [open, setOpen] = useState(false);


  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    setTimeout(() => {
        setOpen(false);
    }, 3000); // Close after 3 seconds

    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

    
    
  return (
    <Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width: "360px", margin: "auto", mt: 5 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Add Person
            </Typography>
            <TextField
                id="name"
                label="Name"
                variant="outlined"
                type="text"
                onChange={handleInputChange}
            />
            <TextField
                id="age"
                label="Age"
                variant="outlined"
                type="number"
                onChange={handleInputChange}
            />
            <TextField
                id="email"
                label="Email"
                variant="outlined"
                type="text"
                onChange={handleInputChange}
            />
            <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }}
                disabled={!person.name || !person.age || !person.email} // Disable if any field is empty
                onClick={handleSubmit}
            >
                {isLoading ? "Adding..." : "Add Person"}
            </Button>
        </Box>
        <div>
            {/* <Button onClick={handleClick}>Open Snackbar</Button> */}
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert
                onClose={handleClose}
                severity={isSuccess ? "success" : isError ? "error" : "info"}
                variant="filled"
                sx={{ width: '100%' }}
                >
                    {isSuccess ? "Person added successfully!" : (isError && error && 'status' in error) ? `Error: ${error.data || "Failed to add person"}` : ""}
                </Alert>
            </Snackbar>
        </div>
    </Box>
  )
}

export default AddPerson