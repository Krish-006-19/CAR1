import { useId } from "react";

function InputBox({
    label,
    input=0,
    onAmountChange,
    onCurrencyChange,
    currencyOption = [],
    selectCurrency='usd',
    amountDisable = false,
    currencyDisable = false,
}) {
   
    let inputId = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block" htmlFor = {inputId}>
                    {label}
                </label>
                <input 
                    id={inputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    onChange={e=>onAmountChange && onAmountChange(Number(e.target.value))}//crazy visualisation!
                    disabled={amountDisable}//new stuff! 
                    value={input}//crazy stuff!
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency} 
                    disabled={currencyDisable}
                    onChange={(e)=>( onCurrencyChange && onCurrencyChange(e.target.value))}//crazy visualisation!
                >
                        {currencyOption.map((Currency)=>(<option key={Currency} value={Currency}>
                                                        {Currency} 
                                                        </option>))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;