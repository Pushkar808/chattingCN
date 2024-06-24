import { ADD_CHAT, ADD_USER } from "../../utils/actionTypes";


const addItem = (data) => {
    return {
        type: ADD_CHAT,
        payload: data
    };
};

const deleteItem = () => {
    return {
        type: ADD_USER,
    };
};

export { addItem, deleteItem };