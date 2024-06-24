import './App.css';
import { Chat } from './components/Chat';
import { Sidebar } from './components/Sidebar';
import { Route, Routes } from "react-router-dom";


function App() {
  localStorage.setItem('senderId', 'user1')
  return (
    <div className='flex w-full h-screen gap-2'>
      <Sidebar />
      <Routes>
        <Route exact path="/chat/:userId" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
