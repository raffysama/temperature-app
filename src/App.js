import React, {useState, useEffect} from 'react';
import './App.css';

function App() {


  const [count, setCount] = useState(0);
  const [color, setColor] = useState('');


  useEffect(() => {
    handleColor();
  }, [count]);
  
  const handleColor = () => {
    if (count >= 100) {
      setColor('red');
    } else if (count >= 75) {
      setColor('orange');
    } else if (count >= 30) {
      setColor('blue');
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
      <div className="inner-box" style={{background: color}}>
        <p className='inner-text'>{count}°C</p>
      </div>
      </div>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default App;
