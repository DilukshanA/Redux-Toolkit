import { Box, Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import { useGetPersonByIdQuery } from "../redux/reducers/personApiSlice";

const PersonView = () => {

    const { id } = useParams<{ id: string}>();

    const { data: person, isLoading, isError} = useGetPersonByIdQuery(id as string);

    if (isLoading) {
        return (
            <Box>
                <Typography variant="h3">
                    Loading...
                </Typography>
            </Box>
        )
    }
    if (isError) {
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
        <Box sx={{display: "flex", flexDirection: "raw", gap: 2, margin: "auto", mt: 5 }}>
            <Box>Name : </Box>
            <Box>{person?.name} </Box>
        </Box>
        <Box sx={{display: "flex", flexDirection: "raw", gap: 2, margin: "auto", mt: 5 }}>
            <Box>Age : </Box>
            <Box> {person?.age}</Box>
        </Box>
        <Box sx={{display: "flex", flexDirection: "raw", gap: 2, margin: "auto", mt: 5 }}>
            <Box>Email : </Box>
            <Box>{person?.email} </Box>
        </Box>
        
    </Box>
  )
}

export default PersonView