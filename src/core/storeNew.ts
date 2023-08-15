import { configureStore } from '@reduxjs/toolkit'
import { lessonsReducer } from '../models/lessons/lessonsReducer'
import { newfeedbacksReducer } from '../models/newFB/newFeedbacksReducer'

const newStore = configureStore({
  reducer: {
    newfeedbacksReducer,
    lessonsReducer
  }
})

export type RootState = ReturnType<typeof newStore.getState>
export type AppDispatch = typeof newStore.dispatch

export default newStore