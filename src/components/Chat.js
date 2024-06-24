import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { addItem } from '../store/action/chatAction';
export const Chat = () => {
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();
    const { userId } = useParams();
    const senderId = localStorage.getItem('senderId');
    const messages = useSelector((state) => state?.chats);
    useEffect(() => {
        console.log(messages)
    }, [messages])
    const sendMessage = (e) => {
        e.preventDefault();
        const data = {
            "messageId": uuidv4(),
            "senderId": senderId,
            "timestamp": moment().format(),
            "text": message
        }
        dispatch(addItem({ receiverId: userId, newMessage: data }));
        setMessage("")//resets the message placeholder
    }
    return (
        <div className="w-full bg-white pt-4 flex flex-col justify-between">
            <div class="space-y-4  overflow-y-auto pb-4" >
                {messages?.chats[userId]?.messages?.map((message) => {
                    return (
                        <>
                            {message?.senderId === userId ?
                                < div class="flex">
                                    <div class="bg-white p-3 rounded-lg shadow-md max-w-xs">
                                        <p class="text-gray-800">{message?.text}</p>
                                        <span class="text-xs text-gray-500 mt-1">{moment(new Date(message?.timestamp)).format("LT")}</span>
                                    </div>
                                </div >
                                :
                                <div class="flex justify-end">
                                    <div class="bg-blue-500 p-3 rounded-lg shadow-md text-white max-w-xs">
                                        <p>{message?.text}</p>
                                        <span class="text-xs text-blue-200 mt-1">{moment(new Date(message?.timestamp)).format("LT")}</span>
                                    </div>
                                </div>
                            }
                        </>
                    );
                })}
            </div>
            <div class="p-4 bg-gray-100 border-t border-gray-200 sticky bottom-0 w-full">
                <form class="flex items-center" onSubmit={sendMessage}>
                    <input
                        type="text"
                        class="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        placeholder="Type your message..."
                    />
                    <button
                        type="submit"
                        class="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"

                    >
                        Send
                    </button>
                </form>
            </div>
        </div >
    )
}
