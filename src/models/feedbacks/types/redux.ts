import { FeedbackActionType } from "./actionTypes";

export type FeedbackState = {
  feedbacks: Feedback[];
  // loading: boolean;
  // error: null | string;
}

export type Feedback = {
  id: number;
  author: string;
  description: string;
};

export type AddNewFeedbackAction = {
  type: FeedbackActionType.ONE_MORE_FB,
  payload: Feedback
}