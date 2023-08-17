import { FeedbackActionType } from "./actionTypes"


type FetchFeedback = {
  type: FeedbackActionType.FETCH_FEEDBACKS
}

type FetchFeedbackSuccessAction = {
  type: FeedbackActionType.FETCH_FEEDBACKS_SUCCESS
  payload: any[]
}

type FetchFeedbackErrorAction = {
  type: FeedbackActionType.FETCH_FEEDBACKS_ERROR
  payload: string
}


export type FeedbackActionCreator =
  FetchFeedback
  | FetchFeedbackSuccessAction
  | FetchFeedbackErrorAction