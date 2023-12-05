import React, { useState} from 'react';


export const AuthContext = React.createContext({}); 

export const AuthProvider = (props) => {
    const [autenticar, setAutenticar] = useState(false);
    const [user, setUser]= useState({});

    return (
        <AuthContext.Provider value={{ autenticar, setAutenticar, user, setUser }}>
            {props.children}
        </AuthContext.Provider>
    );
}
