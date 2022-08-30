import { combineReducers } from "redux";
import itemtobasket from "./itemtobasket"
import currentuser from "./currentuser"


const reducers = combineReducers({
    basketItem:itemtobasket,
    user:currentuser
})


export default reducers 