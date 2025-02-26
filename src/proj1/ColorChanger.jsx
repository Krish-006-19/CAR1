import { useState } from "react";

function BGchanger(){
let [edit,editor] = useState('white');
    return(
        <>
        <div className="w-full h-screen" style={{backgroundColor: edit}}>
        <div className="flex p-4 justify-evenly bg-white">
            <button onClick={()=>editor('red')} className="rounded-xl p-4 bg-red-500 border text-white">Red</button>
            <button onClick={()=>editor('green')} className="rounded-xl p-4 bg-green-500 border text-white">Green</button>
            <button onClick={()=>editor('blue')} className="rounded-xl p-4 bg-blue-600 border text-white">Blue</button>
            <button onClick={()=>editor('orange')} className="rounded-xl p-4 bg-orange-600 border text-black">Orange</button>
            <button onClick={()=>editor('gray')} className="rounded-xl p-4 bg-gray-500 border text-black">Gray</button>
            <button onClick={()=>editor('yellow')} className="rounded-xl p-4 bg-yellow-500 border text-black">Yellow</button>
            <button onClick={()=>editor('pink')} className="rounded-xl p-4 bg-pink-600 border text-black">Pink</button>
            <button onClick={()=>editor('purple')} className="rounded-xl p-4 bg-purple-600 border text-black">Purple</button>
            <button onClick={()=>editor('violet')} className="rounded-xl p-4 bg-violet-500 border text-black">violet</button>
            <button onClick={()=>editor('white')} className="rounded-xl p-4 bg-white border text-black">White</button>
            <button onClick={()=>editor('black')} className="rounded-xl p-4 bg-black text-white">Black</button>
        </div>
        </div>
        </>
    );
}
export default BGchanger;