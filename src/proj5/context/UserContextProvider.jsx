import React, { useState } from 'react';
import UserContext from './UserContext';

let UserContextProvider = ({ children }) => {
    let [user, setUser] = useState([]); // Change from array to object

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
