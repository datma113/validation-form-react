import './App.css';
import MyCustomInput from './components/MyCustomInput'

function App() {
  const LABEL_NAME = "Enter your Name"
  const LABEL_AGE = "Enter your Age"

  const ID_NAME = 'name'
  const ID_AGE = 'age'



  const checkRegexOfName = (value) => {
    const MESSAGE_REGEX_NAME = "Name must only be character"
    const REGEX = /[\d]/g
    
    let matches = REGEX.test(value)
    console.log(matches)

    return matches ?  MESSAGE_REGEX_NAME : ""
  }
  const checkRegexOfAge = (value) => {
    const MESSAGE_REGEX_AGE = "age must only be number"
    const REGEX = /[A-Za-z]/g
    
    let matches = REGEX.test(value)
    return matches ? MESSAGE_REGEX_AGE : ""
  }

  return (
    <div className="App container mt-5">
      <div className="col-4">
        <MyCustomInput labelOfInput={LABEL_NAME} idOfInput={ID_NAME}  checkRegex={checkRegexOfName}  />
        <MyCustomInput labelOfInput={LABEL_AGE}  idOfInput={ID_AGE}   checkRegex={checkRegexOfAge}   />

      </div>
    </div>
  );
}

export default App;
