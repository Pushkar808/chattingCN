import React from 'react'
import { users } from '../utils/users'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
    return (
        < div className="w-1/4 bg-gray-800 text-white p-4" >
            <h2 className="text-xl font-semibold mb-4">Users</h2>
            <ul>
                {users?.map((user, index) => (
                    <li key={index} className="p-2 hover:bg-gray-700 rounded cursor-pointer">
                        <Link to={`/chat/${user?.id}`} >
                            {user?.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div >
    )
}
