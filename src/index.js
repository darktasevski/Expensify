import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import registerServiceWorker from "./registerServiceWorker";

const store = configureStore();

console.info(store.getState());

ReactDOM.render(<AppRouter />, document.getElementById("root"));
registerServiceWorker();
