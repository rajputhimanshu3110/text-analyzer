import React, {useState} from "react";
import Nav from "./Nav";

function TextForm(props) {
    const [text, setText] = useState('');
    const handleChange = (e) => {
        setText(e.target.value)
    }
    const lowerCase = (e) => {
        let newText = text.toLowerCase()
        setText(newText)
    }
    const upperCase = (e) => {
        let newText = text.toUpperCase()
        setText(newText)
    }
    const removeSpace = (e) => {
        let newText = text.trim()
        setText(newText)
    }
    const clearAll = () => {
        setText('')
    }
    
    return (
     <>
    <Nav branding='Text Analyzer'/>
    <div className='container my-2'>
        <form action="/action_page.php">
            <h2 className="head">{props.label}</h2>
            <textarea className="form-control" rows={props.r} value={text} onChange={handleChange} placeholder="Enter text to start Analysis"></textarea>
        </form> 
        <button type="button" onClick={lowerCase} className="btn btn-primary btn-sm m-2">Lower Case</button>        
        <button type="button" onClick={upperCase} className="btn btn-info btn-sm m-2">Upper Case</button> 
        <button type="button" onClick={removeSpace} className="btn btn-success btn-sm m-2"><abbr title="Remove Extraspaces from both side">Extraspaces</abbr></button>
        <button type="button" onClick={clearAll} className="btn btn-danger btn-sm m-2">Clear All</button> 

    </div>
    <div className="container my-2 bg-dark text-white py-2">
        <h3 className="head">Summary Wing</h3>
        <ol className="gen">
            <li>You have {text.split(' ').length} words</li>
            <li>You have {text.length} char</li>
            <li>Minimum Reading Time: {(text.split(' ').length-1)*0.004} minute</li>
            

        </ol>
        <h5 className="head">Preview Wing</h5>
        <p className="preview">{text}</p>
    </div>
    </>
    );
}
TextForm.defaultProps = {
    label : 'Enter Text'
}
export default TextForm;
