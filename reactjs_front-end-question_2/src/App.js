import React, { useState } from 'react';
import './App.css'
function App() {
  const [inputText, setInputText] = useState('');
  const [todoItems, setTodoItems] = useState([]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddItem = () => {
    if (inputText.trim() !== '') {
      setTodoItems([...todoItems, inputText]);
      setInputText('');
    }
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...todoItems];
    updatedItems.splice(index, 1);
    setTodoItems(updatedItems);
  };

  return (
    <div className="container">
      <h1 className="heading">Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          className="input-field"
          placeholder="Enter a task"
        />
        <button onClick={handleAddItem} className="add-button">Add</button>
      </div>
      <ul className="todo-list">
        {todoItems.map((item, index) => (
          <li key={index} className="todo-item">
            <span className="item-text">{item}</span>
            <button onClick={() => handleDeleteItem(index)} className="delete-button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );

}

export default App;
