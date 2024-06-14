import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import RemainingBudget from './components/Remaining';
import CurrencySelector from './components/CurrencySelector';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                
                {/* Currency Selector */}
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <CurrencySelector />
                    </div>
                </div>
                
                {/* Budget, Remaining Budget, Expense Total */}
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget />
                    </div>
                    <div className='col-sm'>
                        <RemainingBudget />
                    </div>
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                </div>

                {/* Expense List */}
                <h3 className='mt-3'>Allocation</h3>
                <div className='row'>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                </div>

                {/* Allocation Form */}
                <h3 className='mt-3'>Change allocation</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AllocationForm />
                    </div>
                    <div className='green-text'>Currency: £ Pound</div> {/* Apply green-text class here */}
                </div>
            </div>
        </AppProvider>
    );
};

export default App;
