import { io } from "https://cdn.socket.io/4.7.5/socket.io.esm.min.js";
import { useRef, useState } from "react";
import "./components/dice.css";

export const Ludoss = () => {
  const socket = io("https://space-voyager-coders-032.onrender.com");

  let [chat, setChat] = useState([]);

  let chatinput = useRef("");

  function handleChatsubmit() {
    let msg = chatinput.current.value;
    if (msg) {
      socket.emit("appchat", msg);
      chatinput.current.value = "";
    }
  }

  socket.on("appchat", (msg) => {
    setChat([...chat, msg]);
  });

  const iframeSrc = "https://space-voyager-coders-032.onrender.com/api/ludogame";
  return (
    <>
      <div
        style={{
          height: "85vh",
          width: "95vw",
          margin: "auto",
          marginTop: "100px",
          marginBottom: "50px",
        }}
      >
        <iframe
          src={iframeSrc}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "20px",
          }}
          title="Ludo Game"
        />
      </div>
      <div
        style={{
          width: "95vw",
          margin: "auto",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        <div
          className="chattingbox"
          style={{ backgroundColor: "white", borderRadius: "10px" }}
        >
          <h2>Chat with your friend's</h2>
          <div className="messagecontainer">
            {chat.map((msg, index) => (
              <div className="messagetextdiv" key={index}>
                <p>{msg}</p>
              </div>
            ))}
          </div>
          <div className="sendingbuttonofmessage">
            <input
              ref={chatinput}
              type="text"
              placeholder="Type your message"
            />
            <button onClick={handleChatsubmit}>Send</button>
          </div>
        </div>
      </div>
    </>
  );
};
