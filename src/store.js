import { createStore } from 'redux'
import counter from './reducer/index'

const store = createStore(counter)

export default store
