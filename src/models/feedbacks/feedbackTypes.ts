export type FeedbackState = {
  feedbacks: any[];
  loading: boolean;
  error: null | string;
}

export type Feedback = {
  id: number;
  author: string;
  description: string;
};

export enum FeedbackActionType {
  FETCH_FEEDBACKS = "FETCH_FEEDBACKS",
  FETCH_FEEDBACKS_SUCCESS = "FETCH_FEEDBACKS_SUCCESS",
  FETCH_FEEDBACKS_ERROR = "FETCH_FEEDBACKS_ERROR"
}

export type FetchFeedbackAction = {
  type: FeedbackActionType.FETCH_FEEDBACKS
}

export type FetchFeedbackSuccessAction = {
  type: FeedbackActionType.FETCH_FEEDBACKS_SUCCESS
  payload: any[]
}

export type FetchFeedbackErrorAction = {
  type: FeedbackActionType.FETCH_FEEDBACKS_ERROR
  payload: string
}

export type FeedbackAction =
  FetchFeedbackAction
  | FetchFeedbackSuccessAction
  | FetchFeedbackErrorAction