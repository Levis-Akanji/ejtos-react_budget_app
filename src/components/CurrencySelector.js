import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../styles.css'; // Import your CSS file here

const CurrencySelector = () => {
    const { dispatch } = useContext(AppContext);

    const handleChangeCurrency = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    };

    return (
        <div className="currency-label">
            <label htmlFor="currency">Select Currency: </label>
            <select id="currency" className="currency-select" onChange={handleChangeCurrency}>
                <option value="£">£ Pound</option>
                <option value="$">$ Dollar</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
        </div>
    );
};

export default CurrencySelector;