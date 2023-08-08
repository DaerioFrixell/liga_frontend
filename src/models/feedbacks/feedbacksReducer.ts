import { FeedbackAction, FeedbackActionType, FeedbackState } from "./feedbackTypes"

const initialState = {
  feedbacks: [],
  loading: false,
  error: null
}

export const feedbacksReducer =
  (state = initialState, action: FeedbackAction): FeedbackState => {
    switch (action.type) {
      case FeedbackActionType.FETCH_FEEDBACKS:
        return {
          loading: true,
          error: null,
          feedbacks: []
        }
      case FeedbackActionType.FETCH_FEEDBACKS_SUCCESS:
        return {
          loading: false,
          error: null,
          feedbacks: action.payload
        }
      case FeedbackActionType.FETCH_FEEDBACKS_ERROR:
        return {
          loading: false,
          error: action.payload,
          feedbacks: []
        }
      default: return state
    }
  }

