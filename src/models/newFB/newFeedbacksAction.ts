
export type T_addNewFeedbackAction = {
  type: string,
  payload: any
}
export const addNewFeedbackAction = (feedback: any): T_addNewFeedbackAction => ({
  type: "one-more-feedback",
  payload: feedback
})