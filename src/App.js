import './App.css';

function App() {
  const sayHello = (e) =>{  
    e.preventDefault();
    console.log("Hola mundo!")
  }
  return (
    <div className="container pt-4" >
      <form>
    <div className="mb-5 ">
      <label  className="form-label">Email </label>
      <input type="email" className="form-control"  autoComplete="off"/>
    </div>
    <div className="mb-3">
      <label className="form-label">Password</label>
      <input type="password" className="form-control"  autoComplete="off"/>
    </div>
    
      <button type="submit" className="btn btn-primary" onClick={sayHello}>Submit</button>
    </form>
  </div>
  );
}

export default App;
