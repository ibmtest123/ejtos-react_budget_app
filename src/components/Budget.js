import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget,currency, remaining, dispatch } = useContext(AppContext);

  const handleBudgetChange = (e) => {
    const newBudget = parseInt(e.target.value);
    if (!isNaN(newBudget)) {
      dispatch({ type: 'SET_BUDGET', payload: newBudget });
    }
    if (newBudget > 20000){
        alert("The maximum budget is $20,000!")
    }
    if (remaining < 0){
        alert("You cannot reduce the budget lower than the spending")
    }
  };

  return (
    <div className='alert alert-secondary'>
      <span>Budget: {currency}</span>
      <input
        type='number'
        className='form-control'
        value={budget}
        onChange={handleBudgetChange}
        step={10} // Set the step value to 10 for increasing and decreasing by 10
      />
    </div>
  );
};

export default Budget;
