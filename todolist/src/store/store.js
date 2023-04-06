import {configureStore} from "@reduxjs/toolkit"
import taskSlice from "./reducer"
import { composeWithDevTools } from "redux-devtools-extension";


const store=configureStore({
    reducer:taskSlice,
    dev:composeWithDevTools()
})
export default store