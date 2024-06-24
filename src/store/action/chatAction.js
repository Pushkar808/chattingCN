import { ADD_CHAT, GET_USER } from "../../utils/actionTypes";


const addItem = (data) => {
    return {
        type: ADD_CHAT,
        payload: data
    };
};

const getUser = (data) => {
    return {
        type: GET_USER,
        payload: data
    };
};

export { addItem, getUser };