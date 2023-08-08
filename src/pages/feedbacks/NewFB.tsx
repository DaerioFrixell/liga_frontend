import "./newfb.scss"
import { Header } from "../../components/header/Header"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { useState } from "react"
import { FeedbackItem } from "./feedbackItem/FedbackItem"


export const NewFB = () => {
  const [feedbackNumber, setFeedbackNumber] = useState(0)
  const { newfeedbacksReducer } = useTypedSelector(state => state)

  return (
    <>
      <Header />
      <FeedbackItem
        id={newfeedbacksReducer.feedbacks[feedbackNumber].id}
        name={newfeedbacksReducer.feedbacks[feedbackNumber].name}
        text={newfeedbacksReducer.feedbacks[feedbackNumber].text}
      />

      <button onClick={() => setFeedbackNumber(feedbackNumber + 1)}>next feeback</button>
      <button onClick={() => setFeedbackNumber(feedbackNumber - 1)}>prev feeback</button>
    </>
  )
}