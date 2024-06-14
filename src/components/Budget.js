import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    useEffect(() => {
        setNewBudget(budget); // Sync newBudget with budget state on currency change
    }, [budget, currency]);

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} {budget}</span>
            <input
                type="number"
                step="10"
                value={newBudget}
                onChange={handleBudgetChange}
            />
        </div>
    );
};

export default Budget;

