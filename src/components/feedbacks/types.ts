import { Dispatch } from "react"
import { Feedback } from "../../models/feedbacks/types/redux"

export type T_HandleFeedback = {
  feedbackNumber: number
  handle: Dispatch<React.SetStateAction<number>>
}

export type T_ViewFeedbacks = {
  feedbacks: Feedback[]
}

export type T_FeedbackItem = {
  id: number
  author: string
  description: string
}