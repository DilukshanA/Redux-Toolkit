import { Box, Button, Grid, Typography } from "@mui/material"
import IconButton from '@mui/material/IconButton';
import Person2Icon from '@mui/icons-material/Person2';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";
import { selectPersons } from "../redux/reducers/personSlice";
import { useGetAllPersonsQuery } from "../redux/reducers/personApiSlice";
import DeletePerson from "./DeletePerson";


const Person = () => {

    const { data: persons, isLoading, isError } = useGetAllPersonsQuery();

    // console.log("persons : ", isLoading);

  // navigate to edit person page

  const navigate = useNavigate();

  const handleEditRoute = (id : string, route: string) => {
    if(route === "edit-person") {
      navigate(`/edit-person/${id}`);
    } else if(route === "view-person") {
      navigate(`/view-person/${id}`);
    }
    
  }

//   const personsObject = useSelector(selectPersons);

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
                Error loading persons
            </Typography>
        </Box>
    )
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container direction={"column"}>

        <Grid container direction="row" size={12} spacing={2}>
          <Grid size={3}>
            <Box>Name</Box>
          </Grid>
          <Grid size={1}>
            <Box>Age</Box>
          </Grid>
          <Grid size={3}>
            <Box>Email</Box>
          </Grid>
          <Grid size={2} display="flex" justifyContent="start" alignItems="center" sx={{ ml: 2 }}>
            <Button variant="contained" color="success" size="small"
            onClick={() => navigate("/add-person")}
            >
                Add
            </Button>
          </Grid>
        </Grid>

        {persons?.map((p, index) => (
        <Grid key={index} container direction="row" size={12} spacing={2} sx={{ mt: 2 }}>
          <Grid size={3} display="flex" justifyContent="start" alignItems="center">
            <Box>{p.name}</Box>
          </Grid>
          <Grid size={1} display="flex" justifyContent="start" alignItems="center">
            <Box >{p.age}</Box>
          </Grid>
          <Grid size={4} display="flex" justifyContent="start" alignItems="center">
            <Box>{p.email}</Box>
          </Grid>
          <Grid size={1} display="flex" justifyContent="start" alignItems="center" sx={{ ml: 2 }}>
            <IconButton aria-label="edit"
              onClick={() => handleEditRoute(p._id, "view-person")}
            >
              <Person2Icon color="success"/>
            </IconButton>
          </Grid>
          <Grid size={1} display="flex" justifyContent="start" alignItems="center" sx={{ ml: 2 }}>
            <IconButton aria-label="edit"
              onClick={() => handleEditRoute(p._id, "edit-person")}
            >
              <EditIcon color="info"/>
            </IconButton>
          </Grid>
          <Grid size={1} display="flex" justifyContent="start" alignItems="center">
            {/* <IconButton aria-label="edit"
            >
              <DeleteIcon color="error"/>
            </IconButton> */}
            <DeletePerson id={p._id} />
          </Grid>
        </Grid>
        ))}

      </Grid>
    </Box>
  )
}

export default Person