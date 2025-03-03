import { useEffect, useState } from "react";

function Todo() {
  let [arr, setarr] = useState(JSON.parse(localStorage.getItem('arr') || []));
  let [info, setinfo] = useState("");

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('arr') || [])!== arr) {
      localStorage.setItem('arr', JSON.stringify(arr));
    }
  }, [arr]);

  return (
    <div className="flex justify-evenly w-full h-screen rounded-4xl fixed top-1/4">
      <div className="">
        <input
          type="text"
          value={info}
          className="bg-white font-sans rounded-l-4xl p-1"
          onChange={(e) => setinfo(e.target.value)}
        />
        <button
          className="bg-white font-sans rounded-r-4xl p-1"
          onClick={() => {
            if (info!== "") { 
              setarr((prev) => [...prev, info]);
              setinfo("");
            }
          }}
        >
          Add
        </button>

        <div className="text-white bg-black relative ">
          {arr.map((value, index) => (
            <div key={index} className="flex justify-between font-sans">
              <p className="text-white bg-black flex justify-between font-sans ">{value}</p>
              <button
                className="font-sans rounded-r-4xl"
                onClick={() => setarr((prev) => prev.filter((_, i) => i !== index))}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todo;
