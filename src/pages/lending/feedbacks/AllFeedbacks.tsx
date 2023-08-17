import { AddFeedback } from "../../../components/feedback/addFeedback/AddFeedback"
import { ViewFeedbacks } from "../../../components/feedback/viewFeedbacks/ViewFeedbacks"
import { useTypedSelector } from "../../../hooks/useTypedSelector"



export const AllFeedbacks = () => {

  const { feedbacksReducer } = useTypedSelector(state => state)

  return (
    <>
      <ViewFeedbacks feedbacks={feedbacksReducer.feedbacks} />
      <AddFeedback />
    </>
  )
}