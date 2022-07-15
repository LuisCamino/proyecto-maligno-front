import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { authReducer } from "./auth/auth.reducer";
import passwordReducer from "./password/password.reducer";


const rootReducer = combineReducers({
    password: passwordReducer,
    auth: authReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;  