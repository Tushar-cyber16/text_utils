import React, { useState } from "react";

export default function TextForm(props) {
  const [text, settext] = useState("");
  const onupclick = () => {
    //  console.log("onupclick clicked");
    let newText = text.toUpperCase();
    settext(newText);
    props.showalert('text converted to uppercase','success');
  };
  const ondownclick = () => {
    //  console.log("ondownclick clicked");
    let newText = text.toLowerCase();
    settext(newText);
    props.showalert('text converted to lowercase','success');
  };
  const onclearclick = () => {
    //  console.log("clear text");
    let newText = "";
    settext(newText);
    props.showalert('text cleared','success');
  };
  const oncopyclick = () => {
    //  console.log("copy text");
    let clip_text = document.getElementById("text-box");
    clip_text.select();
    navigator.clipboard.writeText(clip_text.value);
    document.getSelection().removeAllRanges();
    props.showalert('text copied','success');
  };
  const onextraspaceclick = () => {
    //  console.log("remove extra space");
    let clip_text = text.split(/[ ]+/);
    settext(clip_text.join(" "));
    props.showalert('extra spaces removed','success');
  };
  const onchange = (event) => {
    // console.log("onchange");
    settext(event.target.value);
  };
  return (
    <>
      <div className="container">
        <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {props.text}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={onchange}
            style={{
              backgroundColor: props.mode === "dark" ? "rgb(156 158 229)" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="text-box"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={onupclick}>
          Convert To Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={ondownclick}>
          Convert To lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={onclearclick}>
          clear
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={oncopyclick}>
          copy
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={onextraspaceclick}>
          remove extra space
        </button>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(/\s+/).filter((element) => { return element.length!==0 }).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element) => { return element.length!==0 }).length} minutes to read</p>
        <h3>preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
