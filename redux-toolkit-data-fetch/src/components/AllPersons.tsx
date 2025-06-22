import { fetchAllPerson, selectPersonData, type Person } from "../redux/reducers/personSlice"
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const AllPersons = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchAllPerson())
    },[]);

    const personsData = useAppSelector(selectPersonData);
    //console.log("Persons Data: ", personsData);

  return (
    <div>
        <h1>All Persons</h1>
        {personsData.loading && <p>Loading ...</p>}
        {personsData.error && <p>Error: {personsData.error}</p>}
        {
            personsData.data && 
                <div>
                    {personsData.data.map((person : Person) => (
                        <div key={person._id}>
                            <h2>{person.name}</h2>
                            <p>Age: {person.age}</p>
                            <p>Email: {person.email}</p>
                            <hr />
                        </div>
                    ))}
                </div>
        }
    </div>
  )
}

export default AllPersons