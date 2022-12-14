import { $fakehost, $host } from "../core/url"
import { Feedback } from "../models/feedbacks/feedbackTypes"

export const createFeedback = async (feedback: Feedback) => {
  const { data } = await $host.post("api/feedback", feedback)
  return data
}

export const fetchFeedbacks = async () => {
  const { data } = await $host.get("api/feedback")
  return data
}

export const fetchFakeFeedbacks = async () => {
  const { data } = await $fakehost.get("comments")
  return data
}