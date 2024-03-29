import { useState } from 'react';
import './App.css';
import  Logo  from './images/logo.svg';

function App() {

  const [tipPercentage, setTipPercentage] = useState(0);
  const [billSum, setBillSum] = useState(0);
  const [peopleCount, setPeopleCount] = useState(0);

  const totalPerPerson = billSum * tipPercentage / peopleCount;
  const tipPerPerson = (billSum * tipPercentage - billSum) / peopleCount;

  const reset = () => {
    setTipPercentage(0);
    setBillSum(0);
    setPeopleCount(0);
    document.querySelector('input[name="percentage"]:checked').checked = false;
    document.getElementById('custom-percentage-text').value = "";
  }
  
  const percentageSetter = (p) => {
    setTipPercentage(p);
    document.getElementById('custom-percentage-text').value = "";
  }

  return (
    <div className="App">
      <header>
        <img src={ Logo } alt='logo'/>
      </header>
      <div className='calculator-card'>
        <div className='left-card'>
          <h3>Bill</h3>
          <input id="bill-amount" onChange={e => setBillSum(e.target.value)} value={billSum > 0 ? billSum : ""} placeholder={billSum} autoComplete='off'/>
          <h3>Select Tip %</h3>
          <ul>
            <li>
              <input type="radio" name="percentage" id="5%" onClick={() => percentageSetter(1.05)} style={{backgroundColor: tipPercentage === 1.05 ? "hsl(172, 67%, 45%)" : "hsl(183, 100%, 15%)"}} />
              <label htmlFor="5%">5%</label>
            </li>
            <li>
              <input type="radio" name="percentage" id="10%" onClick={() => percentageSetter(1.1)} style={{backgroundColor: tipPercentage === 1.1 ? "hsl(172, 67%, 45%)" : "hsl(183, 100%, 15%)"}}/>
              <label htmlFor="10%">10%</label>
            </li>
            <li>
              <input type="radio" name="percentage" id="15%" onClick={() => percentageSetter(1.15)} style={{backgroundColor: tipPercentage === 1.15 ? "hsl(172, 67%, 45%)" : "hsl(183, 100%, 15%)"}}/>
              <label htmlFor="15%">15%</label>
            </li>
            <li>
              <input type="radio" name="percentage" id="25%" onClick={() => percentageSetter(1.25)} style={{backgroundColor: tipPercentage === 1.25 ? "hsl(172, 67%, 45%)" : "hsl(183, 100%, 15%)"}}/>
              <label htmlFor="25%">25%</label>
            </li>
            <li>
              <input type="radio" name="percentage" id="50%" onClick={() => percentageSetter(1.5)} style={{backgroundColor: tipPercentage === 1.5 ? "hsl(172, 67%, 45%)" : "hsl(183, 100%, 15%)"}}/>
              <label htmlFor="50%">50%</label>
            </li>
            <li>
              <input type='text' placeholder='Custom' id='custom-percentage-text' onChange={(e) => setTipPercentage(1 + (e.target.value / 100))} autoComplete='off'/>
            </li>
          </ul>
          <h3>Number of People</h3>
          <input type="text" id='people-number' onChange={e => setPeopleCount(e.target.value)} value={peopleCount > 0 ? peopleCount : ""} placeholder={peopleCount} autoComplete='off'/>
        </div>
        <div className='right-card'>
          <div className='tip-amount'>
            <div className='tip-amount-left'>
              <h3>Tip Amount</h3>
              <h5>/ person</h5>
            </div>
            <div className='tip-amount-right'>
              {billSum > 0 && tipPercentage > 0 && peopleCount > 0 ? <h1><span>$</span>{(tipPerPerson).toFixed(2)}</h1> : <h1><span>$</span>0.00</h1>}
            </div>
          </div>
          <div className='total-amount'>
            <div className='total-amount-left'>
              <h3>Total</h3>
              <h5>/ person</h5>
            </div>
            <div className='total-amount-right'>
              {billSum > 0 && tipPercentage > 0 && peopleCount > 0 ? <h1><span>$</span>{(totalPerPerson).toFixed(2)}</h1> : <h1><span>$</span>0.00</h1>}
            </div>
          </div>
          <button onClick={reset} className='reset-btn' disabled={billSum === 0 && tipPercentage === 0 && peopleCount === 0}>Reset</button>
        </div>
      </div>

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="http://github.com/kordoran">kordoran</a>.
      </div>
    </div>
  );
}

export default App;
