import axios from "axios";
import { createContext, useEffect, useState } from "react";


const ProfileContext = createContext()

const ProfileProvider = ({ children }) => {
    const [profileData, setProfileData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const getProfileData = async () => {
        const options = {
            method: 'GET',
            url: 'https://spotify23.p.rapidapi.com/user_profile/',
            params: {
                id: 'nocopyrightsounds',
                playlistLimit: '10',
                artistLimit: '10'
            },
            headers: {
                'x-rapidapi-key': 'e48aae4760msh168a32d55c6ea2fp1054afjsn68df4fe6d656',
                'x-rapidapi-host': 'spotify23.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);



            setProfileData(response.data)

            setLoading(false)



        } catch (error) {
            console.error(error);
            setError(error)

            setLoading(false)

        }


    }


    useEffect(() => {

        getProfileData();


    }, [])




    return (
        <ProfileContext.Provider value={{ loading, error, profileData }}>
            {children}

        </ProfileContext.Provider>

    )
}

export { ProfileProvider, ProfileContext };