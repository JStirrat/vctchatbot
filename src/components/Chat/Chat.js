import { useState } from 'react';
import '../../App.css'

function Chat() {
    const [messages, setMessages] = useState([{
      role: 'system',
      content: 'Welcome! Please enter query below!'
    }]);
  
    function handleSendMessage(messageContent) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "user", content: messageContent },
      ]);
    };
  
    function resetMessages(){
      setMessages(() => [])
    }
  
    return (
      <div className="App">
        <div>
          {messages.map((message, index) => (
            <div key={index}>
              <p>{message.role}: {message.content}</p>
            </div>
          ))}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const input = e.target.elements.user_text.value;
            console.log(input);
  
            if (input.trim() !== "") {
              handleSendMessage(input);
              e.target.reset();
            }
          }}>
          <input className="App-textinput" type="text" name="user_text" placeholder="..."></input>
          <input type="submit"></input>
        </form>
        <button
          onClick={(e) => {
            resetMessages()
          }}
        >
          Clear Message History
        </button>
      </div>
    );
  }
  
  export default Chat;
  