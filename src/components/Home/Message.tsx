import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import log from "../../assets/vid-o-bloom-unscreen.gif";

const socket = io("http://192.168.10.16:5000");

const Message = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const id = nanoid(4);

  const handleSend = (e) => {
    e.preventDefault();
    socket.emit("chat", { message, uid: id });
    setMessage("");
  };

  useEffect(() => {
    socket.on("chat", (payload) => {
      console.log("sok", payload);
      setChat([...chat, payload]);
    });
  });

  console.log("cht", socket.id);

  return (
    <div>
      <div>
        {chat.map((c, index) => (
          <p key={index}>
            {c?.message}{" "}
            <span className="bg-orange-500 text-white">{c.uid}</span>
          </p>
        ))}
      </div>

      <form onSubmit={handleSend}>
        <input
          type="text"
          className="border"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="write here"
          value={message}
        />
        <button type="submit" className="bg-primary">
          Send
        </button>
      </form>

      <img src={log} alt="" />
    </div>
  );
};

export default Message;
