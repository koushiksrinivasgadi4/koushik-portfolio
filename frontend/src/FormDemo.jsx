import React, { useState } from 'react';

function FormDemo() {

  const [name, setName] = useState('');

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert("Hello " + name);
  }

  return (
    <div>
      <h1>My First Form</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleChange}
        />

        <button type="submit">
          Submit
        </button>

      </form>
    </div>
  );
}

export default FormDemo;