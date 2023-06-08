import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [count, setCount] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === '') {
      setError('Please enter a non-empty string.');
      return;
    }

    if (isNaN(count) || count <= 0) {
      setError('Please enter a positive number.');
      return;
    }

    setResult(text.repeat(count));
    setError('');
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label">
            Text:
            <input
              className="input"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label className="label">
            Count:
            <input
              className="input"
              type="number"
              value={count}
              onChange={(e) => setCount(parseInt(e.target.value))}
            />
          </label>
        </div>
        <button className="button" type="submit">Submit</button>
      </form>
      {error && <p className="error">{error}</p>}
      {result && <p className="result">{result}</p>}
    </div>
  );
}

export default App;
