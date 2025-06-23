import { useParams } from "react-router-dom"
import { Box, Button, TextField, Typography } from "@mui/material"
import React, { useEffect, useState } from "react";

type Person = {
    name: String;
    age: Number;
    email: String;
}

const EditPerson = () => {

    const  { id }  = useParams<{ id : string}>();

    const [personData, setPersonData] = useState<Person>({
        name: "",
        age: 0,
        email: ""
    })


    const HandleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setPersonData({
            ...personData,
            [e.target.id]: e.target.value
        })
    }

  return (
    <Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width: "360px", margin: "auto", mt: 5 }}>
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
            <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }}
            >
                Update
            </Button>
        </Box>
    </Box>
  )
}

export default EditPerson