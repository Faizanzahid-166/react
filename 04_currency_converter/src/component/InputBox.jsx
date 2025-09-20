

import React, { useId } from 'react';

function InputBox({
  label,
  amount,
  onAmountchange,
  onCurrencychange,
  currencyOption = [],
  selectCurrency = "USD",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`w-full bg-white rounded-md p-5 grid grid-cols-2 gap-2 ${className}`}>
      
      {/* Label */}
      <div>
        <label htmlFor={amountInputId} className='text-xl p-2'>{label}</label>
      </div>

      {/* Currency Type Title */}
      <div className='justify-self-end'>
        <p>Currency Type</p>
      </div>

      {/* Amount Input */}
      <div>
        <input
          id={amountInputId}
          className='w-full h-7 bg-gray-700 text-white border-0 rounded-md p-2 mt-1 focus:bg-gray-600 focus:outline-none transition ease-in-out duration-150 placeholder-gray-300'
          type="number"
          placeholder='Amount'
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountchange?.(Number(e.target.value))}
        />
      </div>

      {/* Currency Selector */}
      <div className='justify-self-end'>
        <select
          className='w-20 p-2'
          value={selectCurrency}
          disabled={currencyDisable}
          onChange={(e) => onCurrencychange?.(e.target.value)}
        >
          {currencyOption.map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
