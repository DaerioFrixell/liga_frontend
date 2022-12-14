import { FeedbackAction, FeedbackActionType, FeedbackState } from "./feedbackTypes"

// const feedbacksStateUnuse = {
//   feedbacks: [
//     { id: 1, author: 'Игорь', description: 'С каждым занятием моя игра на гитаре становиться всё лучше и лучше,находит индивидуальный подход к каждому!' },
//     { id: 2, author: 'Дмитрий Ширяевский', description: 'Занятия просто огонь, просто о сложном. Все максимально понятно, плюс домашка заставляет развиваться. Рекомендасьён' },
//     { id: 3, author: 'Виктор', description: 'Отличный репетитор по гитаре! Рекомендую!' }
//   ],
// }

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
      // case ADD_FEEDBACK:  // не описан type пока что
      //   return {
      //     ...state,
      //     feedbacks: state.feedbacks.concat(action.payload)
      //   }
      default: return state
    }
  }

