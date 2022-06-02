import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React , {useState} from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] =useState(null);
  const showAlert = (message,type) =>
  {
    setAlert({
          message :message,
          type : type
    })
    setTimeout(()=>
    {
      setAlert(null);
    },2000)
  }
  const toggleMode = () =>
  {
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("dark mode enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode enabled","success");
    }
  }
  return (
  <>
<Router>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className='container my-3'>
<Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
          <TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert}/>
          </Route>
</Switch>
</div>
</Router>
  </> 
  );
}
export default App;
