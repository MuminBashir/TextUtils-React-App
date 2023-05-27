import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const upperCase = () => {
    setText(text.toUpperCase());
    props.alert("Text converted to uppercase", "success");
  };

  const lowerCase = () => {
    setText(text.toLowerCase());
    props.alert("Text converted to lowercase", "success");
  };

  const copyClipboard = () => {
    var txt = document.getElementById("textArea");
    txt.select();
    navigator.clipboard.writeText(txt.value);
    document.getSelection().removeAllRanges();
    props.alert("Text copied to clipboard", "success");
  };

  const clearText = () => {
    setText("");
    props.alert("Text cleared", "danger");
  };

  let wordCount = () => {
    return text.split(" ").filter((e)=>{return e.length!==0}).length;
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
        <button disabled={text===""} className="btn btn-primary mt-4 mx-1" onClick={upperCase}>
          Convert to UpperCase
        </button>
        <button disabled={text===""} className="btn btn-primary mt-4 mx-1" onClick={lowerCase}>
          Convert to LowerCase
        </button>
        <button disabled={text===""} className="btn btn-primary mt-4 mx-1" onClick={copyClipboard}>
          Copy to Clipboard
        </button>
        <button disabled={text===""} className="btn btn-danger mt-4 mx-1" onClick={clearText}>
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
