import { legacy_createStore as createStore } from "redux";

import rootReducer from "./reducer";
// import { composeWithDevTools } from "redux-devtools-extension";

// const composedEnhacers = composeWithDevTools;
const store = createStore(rootReducer);

export default store;
