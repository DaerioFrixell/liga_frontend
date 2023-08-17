import {
  FeedbackActionType,
} from "./types/actionTypes"
import { mockFeedbacks } from "./mockFeedbacks"
import { FeedbackState } from "./types/redux"


const initialState: FeedbackState = {
  feedbacks: mockFeedbacks
}

export const feedbacksReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FeedbackActionType.VIEW:
      return {
        /** тут обращение к бэку, чтобы получить отзывы.
         * бэка пока нет.
         * сменить Type у Action на понятное название
         */
        ...state
      }

    case FeedbackActionType.ONE_MORE_FB:
      return {
        ...state,
        feedbacks: [...state.feedbacks, {
          id: 6,
          author: "qwe",
          description: "Hi! It's worse lesson I have! qwe"
        }]
      }

    default: return state
  }
}

