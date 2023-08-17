import "./handleFeedbacks.scss"
import { T_HandleFeedback } from "../types"
import { FC } from "react"


export const HandleFeedback: FC<T_HandleFeedback> = ({
  feedbackNumber,
  handle
}) => {
  return (
    <>
      <button onClick={() => handle(feedbackNumber + 1)}>next feeback</button>
      <button onClick={() => handle(feedbackNumber - 1)}>prev feeback</button>
    </>
  )
}