import './App.css';
import { Logo } from 'src/images/logo.svg';

function App() {
  return (
    <div className="App">
      <Logo/>
      <div className='calculator-card'>
        <div className='left-card'>
          <h3>Bill</h3>
          <input id="bill-amount" />
          <h3>Select Tip %</h3>
          <ul>
            <li>
              <input type="radio" name="percentage" id="5%" />
              <label htmlFor="5%">5%</label>
            </li>
            <li>
              <input type="radio" name="percentage" id="10%" />
              <label htmlFor="10%">10%</label>
            </li>
            <li>
              <input type="radio" name="percentage" id="15%" />
              <label htmlFor="15%">15%</label>
            </li>
            <li>
              <input type="radio" name="percentage" id="25%" />
              <label htmlFor="25%">25%</label>
            </li>
            <li>
              <input type="radio" name="percentage" id="50%" />
              <label htmlFor="50%">50%</label>
            </li>
            <li>
              <input type="radio" name="percentage" id="Custom" />
              <label htmlFor="Custom">Custom</label>
            </li>
          </ul>

          <h3>Number of People</h3>
        </div>
        <div className='right-card'>
          Tip Amount
          / person
          Total
          / person
          Reset
        </div>
      </div>

      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="http://github.com/kordoran">kordoran</a>.
      </div>
    </div>
  );
}

export default App;
