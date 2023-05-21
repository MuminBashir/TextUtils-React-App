import React, {useState} from "react";

export default function TextForm(props) {

    const [text, setText] = useState("")

    const handleChange = (event)=>{
        setText(event.target.value)
    }

    const upperCase = ()=>{
        setText(text.toUpperCase())
    }
  return (
    <div className="mb-3">
      <label htmlFor="exampleFormControlTextarea1" className="form-label fw-bolder">
        {props.heading}
      </label>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        placeholder="Enter the text"
        value={text}
        onChange={handleChange}
        rows="9"
      ></textarea>
      <button className="btn btn-primary my-3" onClick={upperCase}>Convert to UpperCase</button>
    </div>
  );
}
