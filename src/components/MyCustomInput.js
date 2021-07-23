import React, { useState } from "react";

const MyCustomInput = ({ labelOfInput, idOfInput, checkRegex }) => {
    const [messageOfRegexError, setmessageOfRegexError] = useState("")
    const notMatchRegex = (valueOfInput) => {
        return valueOfInput ? "" : "d-none"
    }


    return (
        <div className="my-input-container mb-3">
            <input
                type="text"
                id={idOfInput}
                className="my-input-text col-12"
                placeholder=" "
                spellCheck={false}
                autoComplete="off"
                onBlur={(event) => {
                    setmessageOfRegexError(checkRegex(event.target.value))
                }}
            />
            <label htmlFor={idOfInput} className="my-input-label">
                {" "}
                {labelOfInput}{" "}
            </label>
            <p style={{color: "red"}} className={notMatchRegex(messageOfRegexError)}> {messageOfRegexError} </p>
        </div>
    );
};

export default MyCustomInput;
