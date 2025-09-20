import './App.css'
import {InputBox} from './component'
import useCurrenyinfo from './custom_hook/useCurrencyinfo'
import React,{useState} from 'react'

function App() {

  const [Amount, setamount] = useState(0)
  const [from, setfrom] = useState("USD")
  const [to, setto] = useState("INR")
  const [convertamount, setconvertedamount] = useState(0) 

  const Currencyinfo = useCurrenyinfo(from)
  const option = Object.keys(Currencyinfo)
const swap = () => {
  const tempFrom = from;
  const tempTo = to;

  setfrom(tempTo);
  setto(tempFrom);

  setamount(convertamount);
  setconvertedamount(Amount);

  console.log("Swapped => From:", tempTo, "To:", tempFrom);
};


const convert = () => {
  if (!Amount || isNaN(Amount)) {
    setconvertedamount(0);
    return;
  }
  setconvertedamount(Number(Amount) * Currencyinfo[to]);
};

  return (
    <>
     <div className='w-1/2 bg-indigo-800 bg-opacity-20 rounded-lg m-auto mt-20 p-7 '>

     {/*hi, this is part-i */}

     <form onSubmit={(e) => {e.preventDefault(); convert() }} >
      
      {/* inputbox -------------------------------------------------------------------------------------------------*/}
      <div className='w-full mb-2 '>
      <InputBox lable="From" amount={Amount} currencyOption={option} 
       onCurrencychange={(currency) => setfrom(currency)}
      selectCurrency={from} onAmountchange={(Amount) => setamount(Amount)}/>
      </div>

      {/* button-swap */}
     <div className='w-full p-5 flex justify-center'>
      <button className='w-20 bg-sky-300 rounded-2xl hover:bg-sky-500 p-3' onClick={swap}>
        swap
      </button>
     </div>
    
     {/*hi, this is part-ii */}

     {/* inputbox -----------------------------------------------------------------------------------------------------*/}
     <div className='w-full mb-2 '>
      <InputBox lable="To" amount={convertamount} currencyOption={option} onCurrencychange={(currency) => setto(currency)} amountDisable selectCurrency={to}/>
      </div>

      {/* button-convert */}
     <div className='w-full p-5 flex justify-center'>
      <button className='w-45 bg-sky-300 rounded-2xl hover:bg-sky-500 p-3' type='submit' >
        Convert_
        { from.toUpperCase() } to { to.toUpperCase() }
  
      </button>
    </div>

  </form>

  </div>
    </>
  )
}

export default App
