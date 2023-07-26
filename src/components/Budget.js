import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const BUDGET_MAX_VALUE = 20000;

const Budget = () => {

    const { budget, expenses, currency, dispatch } = useContext( AppContext );

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

        const onChangeBudgetHandler = (event) => {

            const enteredValue = Number(event.target.value);

            if(Number.isNaN(enteredValue)) {

                alert('Please enter a valid number.');
                return;

            };

            if(!Number.isInteger(enteredValue)){

                alert('Please enter an Integer.');
                return;

            };

            if(enteredValue < totalExpenses){

                alert('The budget cannot be lower than expenses.'+ currency + totalExpenses);
                return;

            } else if (enteredValue > BUDGET_MAX_VALUE){

                alert('The budget cannot exceed ' + currency + BUDGET_MAX_VALUE);
                return;
            }

            dispatch({
                type: 'SET_BUDGET',
                payload: enteredValue,
              });

        };
    
    return (
        <div className="alert alert-secondary mb-3" style={{ display: 'flex', alignItems:'center', }}>

            <div className="input-group-prepend">
                
                <label className="input-group-label" htmlFor="setBudget01">Budget: </label>

            </div>

            <span style={{ marginLeft: '1rem', marginRight: '0.25rem', }}>{currency}</span>

            <input
                required="required"
                type="number"
                id="budget"
                value={budget}
                step="10"
                onChange={onChangeBudgetHandler}
            ></input>

        </div>
        
    );

};

export default Budget;