import React, { useState } from 'react'

function Textform() {
    const [text, setText] = useState('');

    const textFunction = (e) => {
        setText(e.target.value);
    }

    const uppercase = () => {
        setText(text.toUpperCase());
    }
    const lowercase = () => {
        setText(text.toLowerCase());
    }
    const titlecase = () => {
        const wordArray = text.split(' ');
        const wordJoin = [];

        for (let i = 0; i < wordArray.length; i++) {
            const firstLetter = wordArray[i].charAt(0).toUpperCase();
            const restOfWord = wordArray[i].slice(1).toLowerCase();
            const titleCaseWord = firstLetter + restOfWord;
            wordJoin.push(titleCaseWord);
        }

        const sentence = wordJoin.join(" ");

        setText(sentence);
    }
    const trimmer = () => {
        setText(text.replace(/\s+/g, ' ').trim());
    }
    const cleartext = () => {
        setText('');
    }
    const copytext = () => {
        navigator.clipboard.writeText(text);
    }


    return (
        <div className='container my-4'>
            <h1 className='my-4'>Text Utility</h1>
            {/* text areaa */}
            <div className="form-floating">
                <textarea className="form-control" placeholder="Enter text below..." id="floatingTextarea2" style={{ height: "200px" }} value={text} onChange={textFunction}></textarea>
                <label htmlFor="floatingTextarea2">Enter text below...</label>
            </div>
            {/* text areaa */}
            {/* buttons */}
            <div className="buttons">
                <button type="button" className="btn btn-primary  my-4" onClick={uppercase}>UPPERCASE</button>
                <button type="button" className="btn btn-primary mx-2 my-4" onClick={lowercase}>lowercase</button>
                <button type="button" className="btn btn-primary mx-2 my-4" onClick={titlecase}>Title Case</button>
                <button type="button" className="btn btn-primary mx-2 my-4" onClick={trimmer}>Trim Spaces</button>
                <button type="button" className="btn btn-success mx-2 my-4" onClick={copytext}>Copy</button>
                <button type="button" className="btn btn-danger mx-2 my-4" onClick={cleartext}>Clear</button>
            </div>
            {/* buttons */}

            {/* Text Summary */}
            <div className="summary">
                <h1>Text Summary</h1>
                <p>{text.length} characters & {text.split(' ').filter(substring => substring.trim() !== "").length} words.</p>
                <p>Read Time {(text.split(' ').filter(substring => substring.trim() !== "").length) * 0.02 } mins.</p>
            </div>
            {/* Text Summary */}
            {/* Text Preview */}
                <div className="preview">
                    {text && <h1 className='my-2'>Text Preview</h1>}
                    <p>{text}</p>
                </div>
            {/* Text Preview */}
        </div>
    )
}

export default Textform