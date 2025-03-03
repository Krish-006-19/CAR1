import React from 'react';
import { useLoaderData } from 'react-router-dom';

export async function githubLoader() {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary');
    return response.json();
}

function Github() {
    const data = useLoaderData(); 

    return (
        <div className="text-center text-3xl">
            Github followers: {data.followers}
        </div>
    );
}

export default Github;
