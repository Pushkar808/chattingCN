import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../store/action/chatAction';
import { Link } from 'react-router-dom';

export const NewChat = ({ setPopup }) => {
    const [users, setUsers] = useState([]);
    const dispatch = useDispatch();
    const usersState = useSelector((state) => state?.users);
    useEffect(() => {
        setUsers(usersState);
    }, [usersState])
    const handleSearch = (event) => {
        const searchText = event.target.value;
        if (searchText.trim()?.length !== 0)
            dispatch(getUser({ name: searchText?.toLowerCase() }));
        else
            setUsers([])
    }
    return (
        <div className="mx-auto p-4">
            <input
                type="text"
                className="border border-gray-300 p-2 rounded-lg w-full mb-4 text-black"
                placeholder="Search by name..."
                onChange={handleSearch}
            />
            <ul className="divide-y divide-gray-300">
                {
                    users?.length === 0 ?
                        <p className="text-gray-500">No contacts found.</p>
                        :
                        users?.map((user, index) => {
                            return (
                                <li className="py-2" key={index}>
                                    <Link to={`/chat/${user?.id}`} onClick={() => setPopup(false)}>
                                        <p className="font-semibold">{user?.name}</p>
                                        {/* <p className="text-gray-600">contact.email</p> */}
                                    </Link>
                                </li>)
                        })}
            </ul>
        </div>
    )
}
