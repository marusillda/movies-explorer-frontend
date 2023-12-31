import { useState, useCallback } from 'react';

export function useFormAndValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const validateEmail = (value) => /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(value);
  const emailErrorMessage = 'Введите корректный email';

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    const isValidEmail = type === 'email' ? validateEmail(value) : true;
    setValues({ ...values, [name]: type === 'checkbox' ? checked : value });
    setErrors({ ...errors, [name]: e.target.validationMessage || (!isValidEmail && emailErrorMessage) });
    setIsValid(e.target.closest('form').checkValidity() && isValidEmail);
  };

  const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
  }, [setValues, setErrors, setIsValid]);

  return { values, handleChange, errors, isValid, resetForm, setValues, setIsValid };
}
