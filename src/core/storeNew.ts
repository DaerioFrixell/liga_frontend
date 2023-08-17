import { configureStore } from '@reduxjs/toolkit'
import { lessonsReducer } from '../models/lessons/lessonsReducer'
import { feedbacksReducer } from '../models/feedbacks/feedbacksReducer'

const newStore = configureStore({
  reducer: {
    feedbacksReducer,
    lessonsReducer
  }
})

export type RootState = ReturnType<typeof newStore.getState>
export type AppDispatch = typeof newStore.dispatch

export default newStore