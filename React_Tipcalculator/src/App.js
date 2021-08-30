import React, { useState } from "react";
import './App.css';


function App() {

  const [total, setTotal] = useState(); //initialval 
  const [servicePercent, setServicePercent] = useState(5);
  const [numberOfPersons, setNumberOfPersons] = useState();
  const [tip, setTip] = useState(0);
  const [perPerson, setPerPerson] = useState(0);
  const [names, setNames] = useState(""); //empty string.
  const [Items, setItems] = useState([]); // empty array.


  const calculateTip = (event) => { // for calculating  total bill on submit button.
    event.preventDefault();
    setTip(total * (servicePercent / 100)); //logic for tip
    setPerPerson(tip / numberOfPersons);

  }

  const itemEvent = (event) => {
    setNames(event.target.value);
  }; // declaring n calling itemEvent & getting val

  const listofitems = (event) => { // for adding item names.
    if (names && tip) {
      setItems((oldItems) => {
        return [...oldItems, `${names} is offering a tip of ${perPerson}`]; //store val using spread op and showing list of customers.
      });
    }
  };


  return (
    <div className="App">
      <div id="head">
        <header>
          <h1>Tip Calculator</h1>
          <h4>build in React</h4>
        </header>
      </div>

      <form>
        <div className="bill">
          <label >
            <h5 className="space">Enter your bill amount:</h5>
          </label><br />
            <input type="text" className="spread" value={total} onChange={(event) => setTotal(event.target.value)} />
          <br /><br />
          <hr/>
          <div className="space1">
            <label>
              How was the service (in %):
              <input type="number" className="num" value={servicePercent} onChange={(event) => setServicePercent(event.target.value)} />

            </label>
            
            <label className="s1">
              Customers:
              <input type="text" value={numberOfPersons} onChange={(event) => setNumberOfPersons(event.target.value)} />
            </label>
            <input type="submit" className="btn1" onClick={(event) => calculateTip(event)} />
          </div>
        </div>
      </form>
        {/* <p>tip: ${tip}</p> //show tip
      <p>perperson: ${perPerson}</p> */ }
        {/* <p></p>{total}
      <p></p>{servicePercent}
      <p></p>{numberOfPersons} */}

        <div className=" block3">
          <label>
            <h2 id="list">Customer List</h2>
          </label><hr/>
          <input type="text" placeholder="Add customer name" onChange={itemEvent} />
          <button onClick={listofitems}> + </button>

          <ul >
            {Items.map((itemval) => {
              return <li className ="listname"> {itemval} </li>;
            })
            }
          </ul>
        </div>
        <div>
          <table className="table">
            <th>total customer</th>
            <th>total tip</th>
            <hr/>

            <tr>
              <td>{numberOfPersons ? numberOfPersons : 0}</td>
              {/* ternary operator */}
              <td>{tip ? tip : 0}</td>
            </tr>
          </table>
        </div>

        <div className="footer">
          @2021 TIP-CALCULATOR
        </div>

    </div>
      );
}

      export default App;
