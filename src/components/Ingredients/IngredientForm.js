import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo((props) => {
  //useState returns: 1 element is a current state snapshot
  //2 element is a function that allows to update current state
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddIngredient({ title: enteredTitle, amount: enteredAmount });
  };

  return (
    <section className='ingredient-form'>
      <Card>
        <form onSubmit={submitHandler}>
          <div className='form-control'>
            <label htmlFor='title'>Name</label>
            <input
              type='text'
              id='title'
              value={enteredTitle}
              /*to guarantee that the current state is the latest state that was committed instead value it should be pass a function*/
              onChange={(event) => {
                setEnteredTitle(event.target.value);
              }}
            />
          </div>
          <div className='form-control'> 
            <label htmlFor='amount'>Amount</label>
            <input
              type='number'
              id='amount'
              value={enteredAmount}
              /*to guarantee that the current state is the latest state that was committed instead value it should be pass a function*/
              onChange={(event) => {
                setEnteredAmount(event.target.value);
              }}
            />
          </div>
          <div className='ingredient-form__actions'>
            <button type='submit'>Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export { IngredientForm };
