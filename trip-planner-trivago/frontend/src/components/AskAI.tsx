import { useState } from "react";
import { useSquid } from "@squidcloud/react";
import "./AskAI.css"
import LoadingIndicator from "./LoadingIndicator";
import { Link } from "react-router-dom";

function AskAI() {
    const [text, setText] = useState("")
    const [result, setResult] = useState("")
    const [loading, setLoading] = useState(false)
    const squid = useSquid();

    const askPressed = async () => {
        if (!text) return
        setLoading(true)
        const result = await squid.executeFunction("askQuestion",text)
        setResult(result)
        setText("")
        setLoading(false)

    };
    const closeResult = () => {
        setResult("")
    };

    return (
        <div className="container">
            <Link to="/home" className="home">Home</Link>
            <h3>Ask a Question!</h3>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            {loading ? <LoadingIndicator /> : <button onClick={askPressed}>Ask</button>}
            {result && <div className="result-container">
                <textarea value={result} rows={4}/>
                <button onClick={closeResult} className="close-button">Close</button>
            </div>}
        </div>
    );
}

export default AskAI