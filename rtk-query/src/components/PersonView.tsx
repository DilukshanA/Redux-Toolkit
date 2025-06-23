import { Box } from "@mui/material"
import { useParams } from "react-router-dom"
import { useGetPersonByIdQuery } from "../redux/reducers/personApiSlice";

type PersonType = {
    _id: string;
    name: string;
    age: number;
    email: string;
}

const PersonView = () => {

    const { id } = useParams<{ id: string}>();

    const { data: person, isLoading} = useGetPersonByIdQuery(id as string);

    console.log("data : ", person);
    

    // const [person, setPerson] = useState<PersonType>({
    //     _id: "",
    //     name: "",
    //     age: 0,
    //     email: ""
    // });


  return (
    <Box>
        <Box sx={{display: "flex", flexDirection: "raw", gap: 2, margin: "auto", mt: 5 }}>
            <Box>Name : </Box>
            <Box> </Box>
        </Box>
        <Box sx={{display: "flex", flexDirection: "raw", gap: 2, margin: "auto", mt: 5 }}>
            <Box>Age : </Box>
            <Box>  </Box>
        </Box>
        <Box sx={{display: "flex", flexDirection: "raw", gap: 2, margin: "auto", mt: 5 }}>
            <Box>Email : </Box>
            <Box>  </Box>
        </Box>
        
    </Box>
  )
}

export default PersonView