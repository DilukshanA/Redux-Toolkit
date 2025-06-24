import { useParams } from "react-router-dom"
import { Box, Button, TextField, Typography } from "@mui/material"
import React, { useEffect, useState } from "react";
import { useGetPersonByIdQuery, useUpdatePersonMutation } from "../redux/reducers/personApiSlice";
import type { Person } from "../types/Peron";
import CustomSnackbar from "./ui/CustomSnackbar";
import type { SnackbarCloseReason } from "@mui/material/Snackbar";



const EditPerson = () => {

    const  { id }  = useParams<{ id : string}>();

    const { data: person, isLoading: getPersonLoading, isError: getPersonError} = useGetPersonByIdQuery(id as string);

    const [ updatePerson, { isLoading: updateLoading, isSuccess: isUpdateSuccess, isError: isUpdateError, error: updateError} ] = useUpdatePersonMutation();

    const [personData, setPersonData] = useState<Person>({
        _id: id as string,
        name: "",
        age: 0,
        email: ""
    })

    useEffect(() => {
        if (person) {
            setPersonData({
                ...personData,
                name: person.name,
                age: person.age,
                email: person.email
            })
        }
    },[person])


    const HandleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setPersonData({
            ...personData,
            [e.target.id]: e.target.value
        })
    }

    const handleUpdate = async (e: React.FormEvent) => {
         e.preventDefault();
        try {
            await updatePerson(personData).unwrap(); // unwrap to get the result or error
            setOpen(true);
            console.log("Person updated successfully");
        } catch (error) {
            setOpen(true);
            console.error("Failed to update person: ", error);
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

    if (getPersonLoading) {
        return (
            <Box>
                <Typography variant="h3">
                    Loading...
                </Typography>
            </Box>
        )
    }
    if (getPersonError) {
        return (
            <Box>
                <Typography variant="h3">
                    Error loading person
                </Typography>
            </Box>
        )
    }

  return (
    <Box>
        <Box component={"form"} onSubmit={handleUpdate}
            sx={{ display: "flex", flexDirection: "column", gap: 2, width: "360px", margin: "auto", mt: 5 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Edit Person
            </Typography>
            <TextField
                id="name"
                label="Name"
                variant="outlined"
                type="text"
                value={personData.name}
                onChange={HandleInputChange}
            />
            <TextField
                id="age"
                label="Age"
                variant="outlined"
                type="number"
                value={personData.age}
                onChange={HandleInputChange}
            />
            <TextField
                id="email"
                label="Email"
                variant="outlined"
                type="text"
                value={personData.email}
                //onChange={HandleInputChange}
            />
            <Button variant="contained" color="primary" 
                size="large" sx={{ mt: 2 } } type="submit"                disabled={updateLoading}
            >
                {updateLoading ? "Updating..." : "Update"}
            </Button>
        </Box>
        <CustomSnackbar
            open={open}
            message={isUpdateSuccess ? "Person updated successfully!" : (isUpdateError && updateError && 'status' in updateError) ? `Error: ${updateError.data || "Failed to update person"}` : ""}
            severity={isUpdateSuccess ? "success" : isUpdateError ? "error" : "info"}
            autoHideDuration={4000}
            onClose={handleClose}
        />
    </Box>
  )
}

export default EditPerson