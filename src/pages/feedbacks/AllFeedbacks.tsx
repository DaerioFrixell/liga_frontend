import { Header } from "../../components/header/Header"
import { AddFeedback } from "./addFeedback/AddFeedback"
import { ViewFeedbacks } from "./viewFeedbacks/ViewFeedbacks"


export const AllFeedbacks = () => {
  return (
    <>
      <Header />
      <ViewFeedbacks />
      <AddFeedback />
    </>
  )
}