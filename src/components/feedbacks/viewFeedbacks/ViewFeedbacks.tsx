import "./viewFeedbacks.scss"
import { FC, useState } from "react"
import { FeedbackItem } from "./feedbackItem/FedbackItem"
import { HandleFeedback } from "../handleFeedback/HandleFeedback"
import { T_ViewFeedbacks } from "../types"


export const ViewFeedbacks: FC<T_ViewFeedbacks> = ({ feedbacks }) => {
  const [feedbackNumber, setFeedbackNumber] = useState(0)

  return (
    <>
      <FeedbackItem
        id={feedbacks[feedbackNumber].id}
        author={feedbacks[feedbackNumber].author}
        description={feedbacks[feedbackNumber].description}
      />

      <HandleFeedback
        feedbackNumber={feedbackNumber}
        handle={setFeedbackNumber}
      />
    </>
  )
}