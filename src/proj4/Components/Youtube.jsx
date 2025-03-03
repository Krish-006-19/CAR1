import React, { useEffect, useState } from 'react'
import { useLoaderData} from 'react-router-dom'

    export async function youtubestuff(){
        let res = await fetch('https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCNQ6FEtztATuaVhZKCY28Yw&key=AIzaSyB_XhFq5X9F2yOsNiPvRHo8WP19fc5wAiE')
        return res.json();
    }

function Youtube() {
    let data = useLoaderData  ()
    // let [data,setData] = useState('');

    // useEffect(()=>{
    //     fetch('https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCNQ6FEtztATuaVhZKCY28Yw&key=AIzaSyB_XhFq5X9F2yOsNiPvRHo8WP19fc5wAiE')
    //     .then(res=>res.json())
    //     .then(res=>setData(res.items[0].statistics.subscriberCount))
    // },[]);

  return (
    <div className='text-center text-3xl'>Youtube Subscribers: {data.items[0].statistics.subscriberCount}</div>
  )
}

export default Youtube