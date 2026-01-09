import React, { useRef } from 'react'

export const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if (!userMessage) return;
        console.log(userMessage);
        inputRef.current.value = "";

        // update chat history with the user's message
        setTimeout(() => setChatHistory((history) => [...history, { role: "user", text: userMessage }]));
        setTimeout(() => setChatHistory((history) => [...history, { role: "model", text: "Thinking..." }]), 600);

        //call the function to generate the bot's response
        generateBotResponse([...chatHistory, { role: "user", text: userMessage }]);
    };
    return (
        <form className="chatbot-form" onSubmit={handleSubmit}>
            <input ref={inputRef} type="text" placeholder="Type your message..." className="message-input" />
            <button className="material-symbols-rounded">send</button>
        </form>
    )
}
