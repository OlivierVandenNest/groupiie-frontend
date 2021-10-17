import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/general/App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware, combineReducers } from "redux";
// import { requestMeeting, topicToggleReducer } from "./store/reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// const rootReducer = combineReducers({ requestMeeting, topicToggleReducer });

const logger = createLogger();

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));

// TODO: compress app when sending to client

// TODO: clear local storage when user signs out / logs out

ReactDOM.render(
    <React.StrictMode>
        {/* <Provider store={store}> */}
        <App />
        {/* </Provider> */}
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
