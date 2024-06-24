import { createStore } from "redux";
import chatReducer from "./reducers/chatReducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["chats", "users"], // only these reducers will be persisted
};
const persistedReducer = persistReducer(persistConfig, chatReducer);

const store = createStore(
    persistedReducer
);

const persistor = persistStore(store);

export { store, persistor };