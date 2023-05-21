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

  const copyClipboard = () => {
    navigator.clipboard.writeText(text);
    alert("Text copied");
  };

  const clearText = () => {
    setText("");
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
          htmlFor="textArea"
          className={`form-label fw-bolder text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          Enter the text to analyze below
        </label>
        <textarea
          className={`form-control bg-${
            props.mode === "light" ? "light" : "secondary"
          } text-${props.mode === "light" ? "dark" : "light"}`}
          id="textArea"
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
        <button className="btn btn-primary my-3 mx-1" onClick={copyClipboard}>
          Copy to Clipboard
        </button>
        <button className="btn btn-danger my-3 mx-1" onClick={clearText}>
          Clear text
        </button>
      </div>
      <div
        className={`container text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
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
