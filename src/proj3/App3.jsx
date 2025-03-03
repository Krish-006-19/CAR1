import '../App.css'
import InputBox from './Inputbox'
import useCurrencyConverter from './Customhooks/useCurrencyConverter1'
import { useState } from 'react'

function App3(){
  let [amount, setAmount] = useState(0);
  let [convertedAmount, setConvertedAmount] = useState(0);
  let [currencyfrom, setcurrencyfrom] = useState('usd');
  let [to, setTo] = useState('inr');

  let CurrencyInfo = useCurrencyConverter(currencyfrom);//new stuff learned!
  let options = Object.keys(CurrencyInfo);// new stuff learned!

  let swap = () => {
    setcurrencyfrom(to);
    setTo(currencyfrom);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  let convert=()=>setConvertedAmount(amount * CurrencyInfo[to]);

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/2129796/pexels-photo-2129796.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={e=> {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="currencyfrom"
                input={amount}
                onAmountChange={(value) => setAmount(value)}
                currencyOption={options}
                onCurrencyChange={(value) => setcurrencyfrom(value)}
                selectCurrency={currencyfrom}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                input={convertedAmount}
                currencyOption={options}
                onCurrencyChange={(value) => setTo(value)}
                selectCurrency={to}
                amountDisable={true}
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {currencyfrom.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default App3;