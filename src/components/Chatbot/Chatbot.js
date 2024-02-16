import './Chatbot.css';
import {useState} from 'react';

function Chatbot() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const chatWithGPT3 = async (userInput) => {
        const apiEndpoint = 'http://127.0.0.1:5000/get_response';
        const data = {
            message: "abdsadasdac"
        };
        try {
            fetch(apiEndpoint, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            // return response.data.choices[0].text.trim();
        } catch (error) {
            console.error('Error communicating with the API:', error.message);
            return '';
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        const userMessage = {text: input, user: true};
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        const aiMessage = {text: '...', user: false};
        setMessages((prevMessages) => [...prevMessages, aiMessage]);
        const response = await chatWithGPT3(input);
        const newAiMessage = {text: response, user: false};
        setMessages((prevMessages) => [...prevMessages.slice(0, -1), newAiMessage]);
        setInput('');
    };
    return (
        <div className="chatbot-container">
            <div className="chatbot-messages">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`message ${message.user ? 'user-message' : 'ai-message'}`}
                    >
                        {message.text}
                    </div>
                ))}
            </div>
            <form className="chatbot-input-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Chatbot;
