import React from 'react';

const Form = () => {
  return (
    <form>
      <input type='text' name='name' placeholder='name' />
      <input type='text' name='link' placeholder='link' />
      <input type='text' name='image' placeholder='image' />
      <textarea name='description' placeholder='description' />

      <button>add new item</button>
    </form>
  );
};

export default Form;
