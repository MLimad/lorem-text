import React, { useState } from 'react'
import './App.css';
import data from './data'




function App() {

  const [amount,setAmount] = useState(1);
  const [text,setText] = useState([data[0]])
  const [isCopied,setIsCopied] = useState(false)
  const [firstText,setFirstText] = useState(false)
  const [numberChar,setNumberchar] = useState(500)


  const handleSumbit = (e)=>{
    e.preventDefault();
    setText(data.slice(0,amount))
  }

  const handleButton = (e) =>{
    const toCopy = [...text]
    navigator.clipboard.writeText(toCopy.join("\n\n").toString())
    setIsCopied(true)
    
  }

  return (
    <div className="App">
      <div className="title-page">
        <h1>You are Boring of writing text ?!!</h1>
      </div>
      <form onSubmit={handleSumbit}>
        <label htmlFor="amount">Paragraphs</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={amount}
          min={1}
          max={8}
          onChange={(e) => setAmount(e.target.value)}
        />

        <label htmlFor="char-number">
          Number of Characters : {numberChar}
          <input type="range" name="char-number" id="char-number" value={numberChar} min={200} max={800}  onChange={(e)=>setNumberchar(e.target.value)}/>
        </label>

        <label htmlFor="beg-txt">
          <input type="checkbox" name="beg-txt" id="beg-txt" onChange={()=>setFirstText(!firstText)} />
          "I'am baby " at the beginning
        </label>

        <div className="buttons-div">
          <input type="submit" value="Generate" />
          <button onClick={() => handleButton()} className="copy-btn">
            Copy
          </button>
          <span className="copied">{isCopied && "Copied"}</span>
        </div>
      </form>

      <article>
        {text.map((paragraph, index) => (
          <p key={index}>{`${firstText ?  "I'am baby" : ""} ${paragraph.substring(0,numberChar)}`}</p>
        ))}
      </article>
    </div>
  );
}

export default App;
