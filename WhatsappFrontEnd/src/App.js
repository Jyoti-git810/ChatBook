import React,{useEffect,useState} from 'react';
import './App.css';
import Chat from './Component/Chat/Chat';
import Sidebar from './Component/Sidebar/Sidebar';
import Pusher from 'pusher-js';
import axios from './constant';

function App() {
  const [getmessages, setMessages] = useState([]);
  useEffect(() => {
    axios.get('/messages/sync')
    .then(response=>{
      setMessages(response.data)
    })
    
  }, [])

  useEffect(() => {
    const pusher = new Pusher('2771cb64aa796a404ec5', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessages) {
      setMessages([...getmessages,newMessages])
    });

    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [getmessages])
  return (
    <div className="App">
      <div className="app_body">
        <Sidebar/>
        <Chat messages={getmessages}/>
      </div>
    </div>
  );
}

export default App;
