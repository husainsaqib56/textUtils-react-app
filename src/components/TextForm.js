import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');
  const handleOnChange = (event) => {
    console.log('OnChange Clicked');
    setText(event.target.value);
  };

  const handleUpClicked = () => {
    console.log('Uppercase was Clicked');
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Uppercase', 'success');
  };

  const handleLowerClicked = () => {
    console.log('LowerCase was Clicked');
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to Lowercase', 'success');
  };

  const handleCopyClicked = () => {
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Copied to Clipboard!', 'success');
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert('Extra Spaces Removed!', 'success');
  };

  const handleClearClick = () => {
    let newtText = '';
    setText(newtText);
    props.showAlert('Text Cleared', 'success');
  };

  return (
    <>
      <div
        className='container'
        style={{
          color: props.mode === 'dark' ? 'white' : 'black',
        }}
      >
        <h1>{props.heading}</h1>
        <div className='mb-3'>
          <textarea
            className='form-control'
            value={text}
            onChange={handleOnChange}
            id='myBox'
            rows='8'
            style={{
              backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black',
            }}
          ></textarea>
        </div>
        <button onClick={handleUpClicked} className='btn btn-primary mx-2'>
          Convert to UpperCase
        </button>
        <button onClick={handleLowerClicked} className='btn btn-primary mx-2'>
          Convert to LowerCase
        </button>
        <button onClick={handleCopyClicked} className='btn btn-primary mx-2'>
          Copy Text
        </button>
        <button onClick={handleExtraSpaces} className='btn btn-primary mx-2'>
          Remove Extra Spaces
        </button>
        <button onClick={handleClearClick} className='btn btn-primary mx-2'>
          Clear Text
        </button>
      </div>
      <div
        className='container my-3'
        style={{
          color: props.mode === 'dark' ? 'white' : 'black',
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.length === 0 ? 0 : text.split(' ').length} words, {text.length}{' '}
          characters
        </p>
        <p>
          {text.length !== 0 ? 0.008 * text.split(' ').length : 0} Minutes read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : 'Enter something in the textbox above to preview it here'}
        </p>
      </div>
    </>
  );
}
