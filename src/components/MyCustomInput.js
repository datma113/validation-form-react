import React from "react";

const MyCustomInput = ({ labelOfInput }) => {
    return (
        <div className="my-input-container mb-3">
            <input type="text" id="myInputText" className="my-input-text col-12" placeholder=" " 
               spellCheck={false}
            />
            <label htmlFor="myInputText" className="my-input-label">
                {" "}
                {labelOfInput}{" "}
            </label>
        </div>
    );
};

export default MyCustomInput;
