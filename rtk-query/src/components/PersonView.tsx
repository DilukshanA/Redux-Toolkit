import { Box } from "@mui/material"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

type PersonType = {
    _id: string;
    name: string;
    age: number;
    email: string;
}

const PersonView = () => {

    const { id } = useParams<{ id: string}>();

    const [person, setPerson] = useState<PersonType>({
        _id: "",
        name: "",
        age: 0,
        email: ""
    });

    const fetchPerson = async () => {
        try {
            const response = await fetch(`http://localhost:4000/person/${id}`)
            if (response.ok) {
                const data = await response.json();
                setPerson(data);
            } else {
                console.error("Failed to fetch person data");
                console.error("Status Code: ", response.status);
            }
        } catch (error) {
            console.error("Error fetching person data:", error);
        }
    }

    useEffect(() => {
        if (id) {
            fetchPerson();
        } else {
            console.error("No ID provided in URL params");
        }
    },[id]);

  return (
    <Box>
        <Box sx={{display: "flex", flexDirection: "raw", gap: 2, margin: "auto", mt: 5 }}>
            <Box>Name : </Box>
            <Box> {person.name}</Box>
        </Box>
        <Box sx={{display: "flex", flexDirection: "raw", gap: 2, margin: "auto", mt: 5 }}>
            <Box>Age : </Box>
            <Box> {person.age} </Box>
        </Box>
        <Box sx={{display: "flex", flexDirection: "raw", gap: 2, margin: "auto", mt: 5 }}>
            <Box>Email : </Box>
            <Box> {person.email} </Box>
        </Box>
        
    </Box>
  )
}

export default PersonView