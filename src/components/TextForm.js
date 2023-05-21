import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const upperCase = () => {
    setText(text.toUpperCase());
  };
  const lowerCase = () => {
    setText(text.toLowerCase());
  };

  let wordCount = () => {
    if (text === "") {
      return 0;
    }
    return text.split(" ").length;
  };

  return (
    <>
      <div className=" container mb-3">
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label fw-bolder"
        >
          {props.heading}
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          placeholder="Enter the text"
          value={text}
          onChange={handleChange}
          rows="8"
        ></textarea>
        <button className="btn btn-primary my-3 mx-1" onClick={upperCase}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary my-3 mx-1" onClick={lowerCase}>
          Convert to LowerCase
        </button>
      </div>
      <div className="container">
        <h2>Text Summary</h2>
        <p>
          Number of words: <b>{wordCount()}</b>
        </p>
        <p>
          Number of Characters: <b>{text.length}</b>
        </p>
        <p>
          Avg reading time: <b>{0.008 * wordCount()}</b> mins
        </p>
      </div>
    </>
  );
}
