import './App.css';

function App() {
  return (
    <div className="App">
      <div className="overlay">
       <div className="header">
          <h1>Registration Form</h1>
       </div>
       <main className="main">
          <form className="main__form">
            <div className="main__form--input">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" />
            </div>
            <div className="main__form--input">
                <label htmlFor="age">Age</label>
                <input type="text" id="age" name="age" placeholder="Enter your age" />
            </div>
            <div className="main__form--input">
                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="address" placeholder="Enter your Address" />
            </div>
            <div className="main__form--input">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" placeholder="Enter your Email" />
            </div>
            <div className="main__form--btn">
                <button type="submit">Submit</button>
            </div>
          </form>
       </main>
     </div>
    </div>
  );
}

export default App;
