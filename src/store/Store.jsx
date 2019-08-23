import { createStore } from "redux";
import RootReducer from "./RootReducer";

const Store = createStore(RootReducer);

Store.subscribe(() => {
    console.log('Store updated: ', Store.getState())
})

export default Store;
