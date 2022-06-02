import React,{useState} from 'react'

export default function TextForm(props) {
    const [Text,setText] = useState("press [Clear screen] and start using TextUtils :D");
    const handleupClick = ()=>
    {
      setText(Text.toUpperCase());
      props.showAlert("Converted to uppercase!","success");
    }
    const handleOnchange = (event)=>
    {
      setText(event.target.value);
    }
    const handlelwClick = () =>
    {
      setText(Text.toLocaleLowerCase());
      props.showAlert("Converted to lowercase!","success");

    }
    const clearScreen = () =>
    {
      setText("");
      props.showAlert("Text cleared!","success");

    }
    const handleCopy = () => {
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard!","success");

    }
    const handleExtraSpaces = () => {
      let newText = Text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Removed extra spaces!","success");
    }
    const linebreaks1 = () =>
    {
          let newText = Text.replace(/(\r\n|\n|\r)/gm, "");
          setText(newText);
          props.showAlert("Removed line breaks without space!","success");
    }
    const linebreaks2 = () =>
    {
          let newText = Text.replace(/(\r\n|\n|\r)/gm, " ");
          setText(newText);
          props.showAlert("Removed line breaks with spaces!","success");
    }
    const displayinList = () =>
    {
          let newText = Text.replace(" ",'\n');
          setText(newText);
          props.showAlert("Displayed item in list!","success");
    }
    const displayletters = () =>
    {
      let newText ="";
      for (let i = 0; i < Text.length; i++) {
        newText += Text[i] + "\n";
      }
      setText(newText);
      props.showAlert("Displayed alphabets in single letter format!","success");
    }
  return (
    <>
    <div className="container" style={{color : props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={Text} onChange={handleOnchange} style={{backgroundColor : props.mode==='dark'?'grey':'white', color : props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2 my-2" onClick={handleupClick}>Convert to upper case</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handlelwClick}>Convert to lower case</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy text</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
      <button className="btn btn-primary mx-2 my-2" onClick={linebreaks1}>Remove line breaks without space</button>
      <button className="btn btn-primary mx-2 my-2" onClick={linebreaks2}>Remove line breaks with space</button>
      <button className="btn btn-primary mx-2 my-2" onClick={displayinList}>Display words in list</button>
      <button className="btn btn-primary mx-2 my-2" onClick={displayletters}>Isolate alphabets </button>
      <button className="btn btn-danger mx-2 my-2" onClick={clearScreen}>Clear screen</button>

      </div>
    <div className="container my-4" style={{color : props.mode==='light'?'black':'white'}}>
      <h1>your text summary</h1>
      <p>{Text.length>0?Text.split(" ").length:0} words and {Text.length} characters</p>
      <p>{Text.length>0?0.008*Text.split(" ").length:0} minutes read</p>
      <u><h2>Preview</h2></u>
      <p>{Text.length>0?Text:'enter something in textbox to preview here'}</p>
    </div>
    </>
  )
}
