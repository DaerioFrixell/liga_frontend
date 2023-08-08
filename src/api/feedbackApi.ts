import { $fakehost, api } from "../core/api"
import { Feedback } from "../models/feedbacks/feedbackTypes"

export const createFeedback = async (feedback: Feedback) => {
  const { data } = await api.post("api/feedback", feedback)
  return data
}

export const fetchFeedbacks = async () => {
  const { data } = await api.get("api/feedback")
  return data
}

export const fetchFakeFeedbacks = async () => {
  const { data } = await $fakehost.get("comments")
  return data
}