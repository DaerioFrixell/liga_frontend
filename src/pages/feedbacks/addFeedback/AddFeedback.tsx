import { createFeedback } from "../../../api/feedbackApi"
import "./addFeedback.scss"
import { useState, FC, } from "react"
import { useAppDispatch } from "../../../hooks/useDispatch"
import { useDispatch } from "react-redux"
import { addNewFeedbackAction } from "../../../models/newFB/newFeedbacksAction"


export const AddFeedback: FC = () => {
  const [author, setAuthor] = useState("")
  const [description, setDescription] = useState("")
  const dispatch = useDispatch()

  const addNewFeedback = () => {
    const feedback = {
      id: 5,
      author,
      description,
    }
    dispatch(addNewFeedbackAction(feedback));
    setAuthor("")
    setDescription("")
  }

  return (
    <div className="addFeedback"  >
      <input
        className="addFeedback__name"
        placeholder="как вас зовут?"
        value={author}
        onChange={e => setAuthor(e.target.value)}
      />
      <textarea
        className="addFeedback__description"
        placeholder="напишите что-то"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button
        className="addFeedback__btn"
        onClick={addNewFeedback}
      >оставить отзыв
      </button>
    </div>

  )
}