import React, {useState, useEffect} from 'react';
import axios from "../pages/axios/axiosConfig";

const Context = React.createContext();

function ContextProvider(props) {
    const [isSearching, setIsSearching] = useState(false)
    const [newReleases, setNewReleases] = useState([])

    useEffect(() => {
        // Make a request using the Axios instance
        axios.get('/new_movies/?r_date=2020-01-01')
            .then(response => {
                // Handle the response data
                setNewReleases(response.data)
            })
            .catch(error => {
                // Handle any errors
                setNewReleases([]);
            });
    }, []);

    return (
        <Context.Provider value={{
            isSearching: isSearching,
            setIsSearching: setIsSearching,
            newReleases: newReleases,
            setNewReleases: setNewReleases,
        }}>
            {props.children}
        </Context.Provider>
    )
}

export { Context, ContextProvider }