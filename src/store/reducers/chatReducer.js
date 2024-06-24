import { ADD_CHAT, ADD_USER } from "../../utils/actionTypes";
import messages from "../../utils/messages";
import { users } from "../../utils/users";


const initialState = {
    chats: messages,
    users: users
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            const { newMessage, receiverId } = action.payload;
            const oldChats = state.chats[receiverId] ? {
                ...state.chats[receiverId],
                messages: [...state.chats[receiverId].messages, newMessage]
            } : {
                chatId: `chat${receiverId}`,
                messages: [newMessage]
            };
            return {
                ...state,
                chats: { ...state?.chats, [receiverId]: oldChats }
            };
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, state.payload],
            };
        default:
            return state;
    }
};
export default chatReducer;