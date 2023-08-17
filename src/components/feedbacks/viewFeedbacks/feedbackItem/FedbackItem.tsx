import "./fedbackItem.scss"
import { FC, memo } from "react"
import { T_FeedbackItem } from "../../types"


export const FeedbackItem: FC<T_FeedbackItem> = memo(({
  id,
  author,
  description
}) => {
  return (
    <>
      <h2 className="newfb-h1">{id}</h2>
      <h1 className="newfb-h1">{author}</h1>
      <h2 >{description}</h2>
    </>
  )
})