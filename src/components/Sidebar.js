import React, { useState } from 'react'
import { users } from '../utils/users'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Popup } from './Popup';
import { NewChat } from './NewChat';


export const Sidebar = () => {
    const [addChat, setAddChat] = useState(false);
    const messages = useSelector((state) => state?.chats);
    const getLastMessage = (userId) => {
        if (messages[userId] && messages[userId]?.messages?.length != 0) {
            return messages[userId]?.messages[messages[userId]?.messages?.length - 1]?.text
        }
    }
    return (
        < div className="w-1/4 bg-gray-800 text-white p-4" >
            <div className='flex justify-between'>
                <h2 className="text-xl font-semibold mb-4">Conversations </h2>
                <span className='text-center rounded-full w-7 h-7 border border-1 font-bold hover:shadow-md hover:shadow-gray-200 cursor-pointer' onClick={() => setAddChat(true)}>+</span>
            </div>
            <ul>
                {users?.map((user, index) => (
                    <li key={index} className="p-2 hover:bg-gray-700 rounded cursor-pointer">
                        <Link to={`/chat/${user?.id}`} >
                            {/* so that it shows only that user who has done chat */}
                            {messages?.[user?.id] &&
                                <>
                                    <p>
                                        {user?.name}
                                    </p>
                                    <p className='w-full truncate text-sm px-2 text-gray-400'>
                                        {getLastMessage(user?.id)}
                                    </p>
                                </>
                            }
                        </Link>
                    </li>
                ))}
            </ul>

            <Popup
                title={"Search Contacts"}
                component={<NewChat setPopup={setAddChat} />}
                isOpen={addChat}
                setIsOpen={setAddChat}
            />
        </div >
    )
}
