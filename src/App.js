import './App.css';
import MyCustomInput from './components/MyCustomInput'

function App() {
  const LABEL_NAME = "Enter your Name"
  const LABEL_AGE = "Enter your Age"
  
  return (
    <div className="App container mt-5">
      <div className="col-4">
      <MyCustomInput labelOfInput={LABEL_NAME} />
        <MyCustomInput labelOfInput={LABEL_AGE} />
        
      </div>
    </div>
  );
}

export default App;
