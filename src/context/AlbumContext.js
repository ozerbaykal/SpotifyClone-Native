import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AlbumContext = createContext()




export const AlbumsProvider = ({ children }) => {
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const options = {
        method: 'GET',
        url: 'https://spotify23.p.rapidapi.com/search/',
        params: {
            q: 'türkiye de populer olanlar',
            type: 'albums',
            limit: '10',
            numberOfTopResults: '5'
        },
        headers: {
            'x-rapidapi-key': 'e48aae4760msh168a32d55c6ea2fp1054afjsn68df4fe6d656',
            'x-rapidapi-host': 'spotify23.p.rapidapi.com'
        }
    };

    const getData = async () => {

        try {
            const response = await axios.request(options)
            const albumItems = response.data?.albums?.items?.map(item => (
                {
                    uri: item.data.uri,
                    name: item.data.name,
                    artist: item.data.artists.items[0].profile.name,
                    coverArt: item.data.coverArt.sources[0].url,
                    year: item.data.date.year,


                }
            ))
            setAlbums(albumItems);
            setLoading(false);



        } catch (error) {
            setError(error)
            setLoading(false)

        }

    }

    useEffect(() => {
        getData()


    }, [])






    return (
        <AlbumContext.Provider value={{ albums, loading, error }}>
            {children}

        </AlbumContext.Provider>

    )




}
