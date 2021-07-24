import "./App.css";
import MyCustomInput from "./components/MyCustomInput";

function App() {
    const inputComponents = [
        { label: "Enter your Name", messageRegex: "" },
        { label: "Enter your Age", messageRegex: "" },
    ];

    const regexModule = (function () {
        const REGEX_OF_NAME = /[\d]/;
        const REGEX_OF_AGE = /[A-Za-z]/;

        const MESSAGE_OF_REGEX_NAME = "Only Character";
        const MESSAGE_OF_REGEX_AGE = "Only Number";

        //return message(string)
        function checkRegexOfAnyText(anyText, regex, message) {
            let matches = regex.test(anyText);
            return matches ? message : "";
        }

        return {
            checkRegexOfName: function (name) {
                return checkRegexOfAnyText(name, REGEX_OF_NAME, MESSAGE_OF_REGEX_NAME);
            },
            checkRegexOfAge: function (age) {
                return checkRegexOfAnyText(age, REGEX_OF_AGE, MESSAGE_OF_REGEX_AGE);
            },
        };
    })();

    const inputComponentsMap = inputComponents.map((inputComponent, index) => {
        const REGEX_OF_NAME = 0;
        const REGEX_OF_AGE = 1;

        let checkRegex = () => {};

        switch (index) {
            case REGEX_OF_NAME:
                checkRegex = regexModule.checkRegexOfName;
                break;
            case REGEX_OF_AGE:
                checkRegex = regexModule.checkRegexOfAge;
                break;
            default:
                break;
        }
        return (
            <MyCustomInput
                labelOfInput={inputComponent.label}
                idOfInput={index}
                checkRegex={checkRegex}
                key={index}
            />
        );
    });

    return (
        <div className="App container mt-5">
            <div className="col-4"> {inputComponentsMap} </div>
        </div>
    );
}

export default App;
