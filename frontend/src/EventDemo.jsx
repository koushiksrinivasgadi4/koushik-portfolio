import React from 'react';

function EventDemo() {

  function sayHello() {
    alert("Hello Kowshik!");
  }

  function sayBye() {
    alert("Goodbye Kowshik!");
  }

  return (
    <div>
      <h1>Event Handling</h1>

      <button onClick={sayHello}>
        Say Hello
      </button>

      <button onClick={sayBye}>
        Say Bye
      </button>
    </div>
  );
}

export default EventDemo;