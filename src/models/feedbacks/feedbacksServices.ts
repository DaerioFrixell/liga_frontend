import { $fakehost, api } from "../../core/api";
import { Feedback } from "./types/redux";


export const getFeedbacksApi = () => api('/api/feedback');
export const fetchFakeFeedbacks = () => $fakehost.get("comments")

export const createFeedback = (feedback: Feedback) => api.post("api/feedback", feedback)