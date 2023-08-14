import { useState } from "react";
import "./feedbacks.scss";
import { createFeedback } from "../../../api/feedbackApi";
import { useTypedSelector } from "../../../hooks/useTypedSelector";


export const Feedbacks = () => {
  const { loading, error } = useTypedSelector((state: any) => state.feedback)
  if (loading) { <h1>Идёт загрузка...</h1> }
  if (error) { <h1>{error}</h1> }

  const [description, setDescription] = useState('')
  const [author, setAuthor] = useState('')
  const addNewFeedback = () => {
    createFeedback({ id: 5, author: author, description: description })
    // dispatch(addFeedbackAction({
    //   author,
    //   description,
    // }));
    setAuthor("")
    setDescription("")
  }



  return (
    <section className="feedbacks">
      <h2 className="we">Отзывы</h2>
      <div className="feedbacks__add"  >

      </div>
    </section>
  )
}