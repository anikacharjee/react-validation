import { useState } from 'react';

export const useNameValidation = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validateName = (value) => {
    const trimmedValue = value.trim();
    setName(value);

    const errorMsg = 
      !trimmedValue ? 'Name is required' :
      trimmedValue.length < 2 ? 'Name should be at least 2 characters' :
      !/^[A-Za-z\s'-]+$/.test(trimmedValue) ? 'Invalid name format' : '';

    setError(errorMsg);
    setIsValid(!errorMsg);
  };

  return { name, error, isValid, validateName };
};
