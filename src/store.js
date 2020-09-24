const {createStore} = require("redux");
const {reducer} = require("./reducers/reducer");

export default createStore(reducer);