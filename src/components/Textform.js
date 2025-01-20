import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=> {
      console.log("Uppercase was clicked" + text);
      let newText = text.toUpperCase(); 
      setText(newText)
      props.showAlert("Converted to uppercase", ("success"))
    } 

     const handleLoClick = ()=> {
      console.log("Lowercase was clicked" + text);
      let newText = text.toLowerCase(); 
      setText(newText)
      props.showAlert("Converted to lowercase", ("success"))
    }
    
     const handleClearClick = ()=> {
      console.log("Lowercase was clicked" + text);
      let newText = (""); 
      setText(newText)
      props.showAlert("Text cleared", ("success"))
    } 

    const handleOnChange = (event)=> {
      console.log("on change")
      setText(event.target.value)
    }


    const [text, setText] = useState ("");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor:
                props.mode === "dark" ? "rgb(42 65 88)" : "white", 
              color: props.mode === "dark" ? "white" : "black", 
            }}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>

      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter(word => word.trim() !== "").length}: words, {text.length} Characters</p> 
        <p>{0.008 * text.split(" ").filter(word => word.trim() !== "").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>
    </>
  );
}
