import React from 'react';
import { useNameValidation } from '../hooks/useNameValidation';

const NameForm = () => { //Arrow Function
    const { name, error, isValid, validateName } = useNameValidation();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(isValid) {
          alert(`Form submitted successfully! Name: ${name}`)
        }
    };

    return(
      <div className='form-container'>
        <h2> Validate Form </h2>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='name'> Name:- </label>
            <input 
                type="text"
                id="name"
                value={name}
                onChange={(e) => validateName(e.target.value)}
                className={error ? 'input-error' : ''}
            />
            {error && <div className='error-message'> {error} </div>}
          </div>
          <button type='submit' disabled={!isValid}> Submit </button>
        </form>
      </div>
    );
};

export default NameForm;