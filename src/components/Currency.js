import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../App.css';

const Currency = () => {
  const { currency, dispatch } = useContext(AppContext);

  const changeCurrency = (event) => {
    const selectedCurrency = event.target.value;
    dispatch({
      type: 'CHG_CURRENCY',
      payload: selectedCurrency,
    });
  };

  return (
    <div className="currency-container">
      Currency:
      <select name="Currency" id="currency" value={currency} onChange={changeCurrency} className="currency-select">
        
        <option value="£">£ Pound</option>
        <option value="₹">₹ Ruppee</option>
        <option value="€">€ Euro</option>
        <option value="$">$ Dollar</option>
      </select>
    </div>
  );
};

export default Currency;
