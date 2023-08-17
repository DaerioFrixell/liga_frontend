import { FeedbackActionType } from "./types/actionTypes"
import { AddNewFeedbackAction, Feedback } from "./types/redux"


export const addNewFeedbackAction = (feedback: Feedback): AddNewFeedbackAction => ({
  type: FeedbackActionType.ONE_MORE_FB,
  payload: feedback
})