import { createSlice } from '@reduxjs/toolkit'
import { concat, map, filter } from 'lodash'

const initialState = {
  collection: [],
  choiceCollection: [],
  choice: 'All',
}

const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    reset: () => initialState,
    add: (state, action) => {
      const { todo } = action.payload
      state.collection = concat(state.collection, todo)
    },
    remove: (state, action) => {
      const { todo } = action.payload
      state.collection = filter(state.collection, (item) => item.id !== todo.id)
    },
    clear: (state, action) => {
      state.collection = filter(state.collection, (todo) => !todo.complete)
    },
    edit: (state, action) => {
      const { editedTodo } = action.payload
      state.collection = map(state.collection, (item) =>
        item.id === editedTodo.id
          ? { ...item, name: editedTodo.name }
          : { ...item }
      )
    },
    show: (state, action) => {
      if (state.choice === 'All') {
        state.choiceCollection = state.collection
      } else if (state.choice === 'Active') {
        state.choiceCollection = filter(
          state.collection,
          (todo) => !todo.complete
        )
      } else if (state.choice === 'Completed') {
        state.choiceCollection = filter(
          state.collection,
          (todo) => todo.complete
        )
      }
    },
    select: (state, action) => {
      const { filter } = action.payload
      state.choice = filter
    },
    toggle: (state, action) => {
      const { todo } = action.payload
      state.collection = map(state.collection, (item) =>
        item.id === todo.id
          ? { ...item, complete: !item.complete }
          : { ...item }
      )
    },
  },
})

export const { add, remove, clear, toggle, show, edit, select } = slice.actions

export default slice.reducer
