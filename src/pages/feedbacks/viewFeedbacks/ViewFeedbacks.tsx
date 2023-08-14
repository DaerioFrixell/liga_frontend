import "./viewFeedbacks.scss"
import { useState } from "react"
import { FeedbackItem } from "./feedbackItem/FedbackItem"
import { useTypedSelector } from "../../../hooks/useTypedSelector"


export const ViewFeedbacks = () => {
  const [feedbackNumber, setFeedbackNumber] = useState(0)
  const { newfeedbacksReducer } = useTypedSelector(state => state)

  return (
    <>
      <FeedbackItem
        id={newfeedbacksReducer.feedbacks[feedbackNumber].id}
        author={newfeedbacksReducer.feedbacks[feedbackNumber].author}
        description={newfeedbacksReducer.feedbacks[feedbackNumber].description}
      />

      <button onClick={() => setFeedbackNumber(feedbackNumber + 1)}>next feeback</button>
      <button onClick={() => setFeedbackNumber(feedbackNumber - 1)}>prev feeback</button>
    </>
  )
}