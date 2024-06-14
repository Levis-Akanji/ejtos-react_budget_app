import React, { createContext, useReducer } from 'react';

// Reducer function to update state based on actions
export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            const updatedExpensesAdd = state.expenses.map((currentExp) => {
                if (currentExp.name === action.payload.name) {
                    return {
                        ...currentExp,
                        cost: currentExp.cost + action.payload.cost,
                    };
                }
                return currentExp;
            });

            return {
                ...state,
                expenses: updatedExpensesAdd,
            };

        case 'SUBTRACT_EXPENSE':
            const updatedExpensesSubtract = state.expenses.map((currentExp) => {
                if (currentExp.name === action.payload.name) {
                    return {
                        ...currentExp,
                        cost: currentExp.cost - action.payload.cost,
                    };
                }
                return currentExp;
            });

            return {
                ...state,
                expenses: updatedExpensesSubtract,
            };

        case 'DELETE_EXPENSE':
            const updatedExpensesAfterDelete = state.expenses.filter(expense => expense.id !== action.payload);

            return {
                ...state,
                expenses: updatedExpensesAfterDelete,
            };

        case 'SET_BUDGET':
            return {
                ...state,
                budget: action.payload,
            };

        case 'CHANGE_CURRENCY':
            return {
                ...state,
                currency: action.payload,
            };

        default:
            return state;
    }
};

// Initial state for the context
const initialState = {
    budget: 2000, // Example initial budget
    expenses: [
        { id: 1, name: 'Marketing', cost: 50 },
        { id: 2, name: 'Finance', cost: 300 },
        { id: 3, name: 'Sales', cost: 70 },
        { id: 4, name: 'Human Resource', cost: 40 },
        { id: 5, name: 'IT', cost: 500 },
    ],
    currency: '£', // Default currency
};

// Context creation
export const AppContext = createContext();

// Provider component to provide state to app
export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Example logic for remaining budget calculation
    let remaining = state.budget - state.expenses.reduce((total, item) => total + item.cost, 0);

    return (
        <AppContext.Provider value={{ ...state, dispatch, remaining }}>
            {props.children}
        </AppContext.Provider>
    );
};
