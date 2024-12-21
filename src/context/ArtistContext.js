import { createContext, useEffect, useState } from "react";
import axios from "axios";

const ArtistContext = createContext();

const ArtistProvider = ({ children }) => {

    const [artists, setArtist] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const getArtist = async () => {
        const options = {
            method: 'GET',
            url: 'https://spotify23.p.rapidapi.com/search/',
            params: {
                q: 'türkiye',
                type: 'artist',
                limit: '10',
                numberOfTopResults: '5'
            },
            headers: {
                'x-rapidapi-key': 'e48aae4760msh168a32d55c6ea2fp1054afjsn68df4fe6d656',
                'x-rapidapi-host': 'spotify23.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            const data = response.data.artists.items

            setArtist(data);
            setLoading(false)


        } catch (error) {

            setError(error)
            setLoading(false)

        }


    }
    useEffect(() => {
        getArtist()


    }, [])





    return (

        <ArtistContext.Provider value={{ artists, loading, error }}>

            {children}


        </ArtistContext.Provider>

    )


}

export { ArtistContext, ArtistProvider }
