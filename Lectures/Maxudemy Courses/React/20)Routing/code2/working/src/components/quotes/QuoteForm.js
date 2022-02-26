import { useRef, useState,Fragment } from 'react';
import {Prompt} from 'react-router-dom'

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  console.log("Component Rendered");
  const [isEntering, setIsEntering] = useState(false);
  console.log('isEntering = ' +isEntering);
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    console.log("Submit Handler Called");
    event.preventDefault();
    setIsEntering(false);
    console.log(isEntering);

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const formFocusedhandler = () => {
    console.log("Focus Handler called");
    if(!isEntering) setIsEntering(true);
  };

  const finishEnteringHandler = () => {
    // setIsEntering(false);
  }

  return (
    <Fragment>
      <Prompt when= {isEntering} message = {(location) => 'Are You Sure You want to leave? All You Data Will be Lost'}></Prompt>
      <Card>
      <form onFocus ={formFocusedhandler} className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor='author'>Author</label>
          <input type='text' id='author' ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Text</label>
          <textarea id='text' rows='5' ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button onClick = {finishEnteringHandler} className='btn'>Add Quote</button>
        </div>
      </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
