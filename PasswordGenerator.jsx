import { useCallback, useEffect, useRef, useState } from "react";

function PassGen() {
  let [length, editLength] = useState(8);
  let [number, editNumber] = useState(false);
  let [char, editChar] = useState(false);
  let [input, editInput] = useState("");


let inputRef = useRef(null);

  let password = useCallback(() => {
    let pass = '';
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (char) str += `'!#$&*(){}`;

    for (let i = 0; i < length; i++) {
      let randomChar = Math.floor((Math.random() * str.length)); 
      pass += str[randomChar];
    }

    editInput(pass);
  }, [length, number, char]); 

  useEffect(() => {
    password();
  }, [password]); 

// let copyclip  =  useCallback(()=>{
// window.navigator.clipboard.writeText(input);
// },[input]);

let copyclip = () => {
  if (inputRef.current) {
    inputRef.current.select();
    window.navigator.clipboard.writeText(input);
  }
};

  return (
    <div>
      <h1 className="text-3xl text-pretty text-center">PASSWORD GENERATOR</h1>
      <div className="bg-gray-800 text-center p-5 rounded-2xl">
        <div>
          <div>
          <input 
  className="w-90 bg-white p-2 text-black rounded-bl-2xl passinput rounded-tl-2xl pl-4 mb-5"
              type="text"
              ref={inputRef}
              value={input}
              readOnly      
            />
            <button className="rounded-br-2xl rounded-tr-2xl passbtn p-2 mb-3 mt-3 bg-blue-400 active:bg-gray-800 "
            onClick={copyclip}>
              Copy
            </button>
          </div>
          <div className="botdiv">
            <div>
            <input
              type="range"
              min="8"
              max="16"
              value={length}
              onChange={(e) => editLength(parseInt(e.target.value))}
              className="mr-2 g text-black"
            />
            <strong className="mr-2">Length({length})</strong>
            </div>
            <div>
            <input 
              type="checkbox" 
              onChange={() => editNumber((number) => !number)} 
              className="h-3 w-3 mr-1 ch1"
            />
            <strong className="mr-2">Numbers</strong>
            </div>
            <div>
            <input 
              type="checkbox" 
              onChange={() => editChar((char) => !char)} 
              className="h-3 w-3 mr-1 ch2"
            />
            <strong>Characters</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PassGen;
