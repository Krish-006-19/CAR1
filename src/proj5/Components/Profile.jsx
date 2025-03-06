import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
    let { user } = useContext(UserContext); // Fix context key

    if (!user) return <div>Please login</div>;

    return <div>Welcome {user.user}</div>; // Fix variable usage
}

export default Profile;
