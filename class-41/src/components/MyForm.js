import { useState } from 'react';
import { useForm } from '../hooks/useForm';

export const MyForm = () => {
  // const [name, setName] = useState('');
  // const [age, setAge] = useState(0);
  // const [color, setColor] = useState('#ffffff');

  const [formState, handleChange] = useForm({
    name: '',
    age: 0,
    color: '#ffffff',
  });

  return (
    <form>
      <label for="name">Name: </label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Enter your name"
        value={formState.name}
        onChange={handleChange}
      />
      <br />
      <label for="age">Age: </label>
      <input
        type="number"
        name="age"
        id="age"
        placeholder="Enter your age"
        value={formState.age}
        onChange={handleChange}
      />
      <br />
      <label for="color">Color: </label>
      <input
        type="color"
        name="color"
        id="color"
        placeholder="Enter your name"
        value={formState.color}
        onChange={handleChange}
      />
    </form>
  );
};
