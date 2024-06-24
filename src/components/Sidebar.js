import React from 'react'
import { users } from '../utils/users'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';


export const Sidebar = () => {
    const messages = useSelector((state) => state?.chats);
    return (
        < div className="w-1/4 bg-gray-800 text-white p-4" >
            <div className='flex justify-between'>
                <h2 className="text-xl font-semibold mb-4">Conversations </h2>
                <span className='text-center rounded-full w-7 h-7 border border-1 font-bold hover:shadow-md hover:shadow-gray-200 cursor-pointer'>+</span>
            </div>
            <ul>
                {users?.map((user, index) => (
                    <li key={index} className="p-2 hover:bg-gray-700 rounded cursor-pointer">
                        <Link to={`/chat/${user?.id}`} >
                            {/* so that it shows only that user who has done chat */}
                            {messages?.[user?.id] &&
                                user?.name
                            }
                        </Link>
                    </li>
                ))}
            </ul>
        </div >
    )
}
