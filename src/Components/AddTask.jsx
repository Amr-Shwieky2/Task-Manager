import React, { useContext, useState } from 'react';
import { data } from '../Context/TaskContext';

function AddTask() {
    const [inputValue, setInputValue] = useState('');
  const {list, setList} = useContext(data);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    setList([...list, inputValue]); // Add inputValue to the list
    setInputValue(''); // Clear the input field after saving
  };

  const handleInputKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleButtonClick(); // Trigger the button click when Enter is pressed
    }
  };
  
  return (
    <>
        <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleInputKeyPress} 
        placeholder="Type task..."
      />
      <button onClick={handleButtonClick}>Save</button>
    </>
    )
}

export default AddTask