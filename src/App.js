import './App.css';
import Alert from './components/Alert';
import React, { useState } from 'react';

import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert('Dark mode has been enabled!', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled!', 'success');
    }
  };
  return (
    <>
      {/* <Router> */}
      <Navbar
        title='TextUtils'
        mode={mode}
        toggleMode={toggleMode}
        aboutText='About'
      />
      <Alert alert={alert} />
      <div className='container my-3'>
        {/* <Switch>
            <Route exact path='/about'>
              <About />
            </Route>
            <Route exact path='/'> */}
        <TextForm
          heading='Enter the text to analyse below'
          mode={mode}
          showAlert={showAlert}
        />
        {/* </Route> */}
        {/* </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
