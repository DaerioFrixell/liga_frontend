import "./viewFeedbacks.scss"
import { FC, useState } from "react"
import { FeedbackItem } from "./feedbackItem/FedbackItem"

type T_ViewFeedbacks = {
  feedbacks: any[]
}
export const ViewFeedbacks: FC<T_ViewFeedbacks> = ({ feedbacks }) => {
  const [feedbackNumber, setFeedbackNumber] = useState(0)

  return (
    <>
      <FeedbackItem
        id={feedbacks[feedbackNumber].id}
        author={feedbacks[feedbackNumber].author}
        description={feedbacks[feedbackNumber].description}
      />

      <button onClick={() => setFeedbackNumber(feedbackNumber + 1)}>next feeback</button>
      <button onClick={() => setFeedbackNumber(feedbackNumber - 1)}>prev feeback</button>
    </>
  )
}