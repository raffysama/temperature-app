import React, {useState, useEffect} from 'react';
import './App.css';

function App() {


  const [count, setCount] = useState(0);
  const [color, setColor] = useState('');
  const [warn, setWarn] = useState('');
  const [textColor, setTextColor] = useState('')


  useEffect(() => {
    handleColor();
  }, [count]);
  
  const handleColor = () => {
    if (count >= 32) {
      setColor('red');
      setWarn('Warning!')
      setTextColor('red'); 
    } else if (count >= 26) {
      setColor('rgb(250, 82, 4)');
      setWarn('Caution!');
      setTextColor('yellow'); 
    } else if (count >= 20) {
      setColor('rgb(238, 123, 47)');
      setWarn('');
    } else if (count >= 15) {
      setColor('rgb(7, 252, 137)');
      setWarn('');
    }else if (count >= 14) {
      setColor('rgb(174, 228, 245)');
      setWarn('');
    }

  };
  
  const handleIncrement = () =>{
    setCount(count + 1)
  }
  const handleDecrement = () =>{
    setCount(count - 1)
  }


  return (
    <div className="App">
      <div className='outer-box'>
        <div className='box-bg'>
          <div className="inner-box" style={{background: color}}>
            <p className='inner-text'>{count}°C</p>
          </div>
          <div className='warn-text' style={{color : textColor}} >
            <h2>{warn}</h2>
          </div> 
          <button onClick={handleIncrement}>+</button>
          <button onClick={handleDecrement}>-</button>
        </div>
      </div>
      
    </div>
  );
}

export default App;
