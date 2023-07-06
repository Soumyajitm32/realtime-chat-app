import { useState,useRef } from "react";
import "./App.css";
import { Auth } from "./Components/Auth";
import Cookies from "universal-cookie";
import { Chat } from "./Components/Chat";


const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);
  const roomInputRef=useRef(null)
  if (!isAuth) {
    return (
      <div className="App">
        <div>
          <Auth setIsAuth={setIsAuth} />
        </div>
      </div>
    );

    
  }
  return (
    <div>
      {room ? (
        <div>
          <Chat room={room}/>
        </div>
      ) : (
        <div className="room">
          <label>Enter Chat Room</label>
          <input ref={roomInputRef} />
          <button onClick={()=>setRoom(roomInputRef.current.value)}>Enter Chat</button>
        </div>
      )}
    </div>
  );
}

export default App;
