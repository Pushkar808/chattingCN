import React from 'react'

export const Popup = ({ title, component, isOpen, setIsOpen }) => {
    return (
        <div id="myModal" class={`fixed inset-0 flex items-center justify-center z-50 modal-overlay ${isOpen ? '' : 'hidden'}`}>
            <div class="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
                <div class="flex justify-between items-center border-b pb-3">
                    <h3 class="text-xl font-semibold">{title}</h3>
                    <button id="closeModalBtn" class="text-gray-500 hover:text-gray-700">&times;</button>
                </div>
                <div class="mt-4">
                    {component}
                </div>
                <div class="mt-6 flex justify-end">
                    <button id="closeModalBtn2" class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600" onClick={() => setIsOpen(false)}>Close</button>
                </div>
            </div>
        </div>
    )
}
