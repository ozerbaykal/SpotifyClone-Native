import { createContext, useState } from "react";


const ProfileContext = createContext()

const ProfileProvider = ({ children }) => {
    const [playlist, setPlaylist] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);




    return (
        <ProfileContext.Provider>
            {children}

        </ProfileContext.Provider>

    )
}