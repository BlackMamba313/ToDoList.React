import { combineReducers } from '@reduxjs/toolkit'

import todos from './slices/todos'

export default combineReducers({
    todos
})