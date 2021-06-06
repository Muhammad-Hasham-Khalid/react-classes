import { useState } from 'react';

export const useForm = (initialFormState = {}) => {
  const [state, setstate] = useState(initialFormState);

  const handleChange = e => {
    setstate({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return [state, handleChange];
};
