const VIEW = "viewFeedback"
const ONE_MORE_FB = "one-more-feedback"

const initialState = {
  feedbacks: [
    {
      id: 1,
      author: "jon",
      description: "Hi! It's the best lesson I have!"
    },
    {
      id: 2,
      author: "aliza",
      description: "Hi! It's worse lesson I have!"
    }
  ]
}

export const newfeedbacksReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case VIEW:
      return {
        ...state
      }
    case ONE_MORE_FB:
      return {
        ...state,
        feedbacks: [
          {
            id: 3,
            author: "aliza",
            description: "Hi! It's worse lesson I have!"
          }
        ]
      }

    default: return state
  }
}

