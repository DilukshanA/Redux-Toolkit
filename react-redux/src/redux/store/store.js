import { createStore } from 'redux';
import reducer from '../reducers/number';

const store = createStore(reducer);

export default store;