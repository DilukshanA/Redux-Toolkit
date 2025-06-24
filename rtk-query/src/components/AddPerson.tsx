import { Box, Button, TextField, Typography } from "@mui/material"
import { useState } from "react";
import { useAddPersonMutation } from "../redux/reducers/personApiSlice";

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

    console.log("person : ", person);

    const [addPerson, { isLoading, isError, error }] = useAddPersonMutation();

    const handleSubmit = async () => {
        try {
            await addPerson(person).unwrap();
        } catch (error) {
            console.error("Failed to add person: ", error);
        }
    }
    
    
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
    </Box>
  )
}

export default AddPerson