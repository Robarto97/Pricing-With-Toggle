import { useState } from "react";
import "./styles.scss";
function App() {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <main>
      <h1>Our Pricing</h1>
      <label htmlFor="checkbox">
        <span>Annually</span>
        <input
          type="checkbox"
          defaultChecked
          onChange={() => setIsChecked((curr) => (curr = !curr))}
          id="checkbox"
        />
        <span>Monthly</span>
      </label>
      <div className="cards">
        <div className="card">
          <h2>Basic</h2>
          <ul>
            <li className="price">
              $<span>{isChecked ? 19.99 : 199.99}</span>
            </li>
            <li>500 GB Storage</li>
            <li>2 Users Allowed</li>
            <li>Send up to 3 GB</li>
          </ul>
          <button>Learn More</button>
        </div>
        <div className="card">
          <h2>Professional</h2>
          <ul>
            <li className="price">
              $<span>{isChecked ? 24.99 : 249.99}</span>
            </li>
            <li>1 TB Storage</li>
            <li>5 Users Allowed</li>
            <li>Send up to 10 GB</li>
          </ul>
          <button>Learn More</button>
        </div>
        <div className="card">
          <h2>Master</h2>
          <ul>
            <li className="price">
              $<span>{isChecked ? 39.99 : 399.99}</span>
            </li>
            <li>2 TB Storage</li>
            <li>10 Users Allowed</li>
            <li>Send up to 20 GB</li>
          </ul>
          <button>Learn More</button>
        </div>
      </div>
    </main>
  );
}

export default App;
