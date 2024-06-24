import React from 'react'

export const Popup = ({ title, component, isOpen, setIsOpen }) => {
    return (
        <div id="myModal" className={`fixed inset-0 flex items-center justify-center z-50 modal-overlay ${isOpen ? '' : 'hidden'}`}>
            <div className="bg-gray-800 rounded-lg shadow-lg max-w-lg w-full p-6">
                <div className="flex justify-between items-center border-b pb-3">
                    <h3 className="text-xl font-semibold">{title}</h3>
                </div>
                <div className="mt-4">
                    {component}
                </div>
                <div className="mt-6 flex justify-end">
                    <button id="closeModalBtn2" className="px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-100" onClick={() => setIsOpen(false)}>Close</button>
                </div>
            </div>
        </div>
    )
}
