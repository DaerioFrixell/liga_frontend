import "./addFeedback.scss"
import { useState, FC, } from "react"


export const AddFeedback: FC = () => {

  return (
    <div className="addFeedback"  >
      <input
        className="addFeedback__name"
        placeholder="как вас зовут?"
      // value={author}
      // onChange={e => setAuthor(e.target.value)}
      />
      <textarea
        className="addFeedback__description"
        placeholder="напишите что-то"
      // value={description}
      // onChange={e => setDescription(e.target.value)}
      />
      <button
        className="addFeedback__btn"
      // onClick={addNewFeedback}
      >оставить отзыв
      </button>
    </div>

  )
}