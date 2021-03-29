import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories}) => {

    // useState() estado Undefined
    // Si queremos que el input esté vacío, podemos dejar useState('')
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim().length > 0) {
            setCategories( categories => [...categories, inputValue]);
            setInputValue('');
        }

    }

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <input type="text" value= { inputValue } onChange={ handleInputChange } />
            </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}