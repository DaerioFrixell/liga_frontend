
import { FC } from "react"

type T_FeedbackItem = {
  id: number
  name: string
  text: string
}

export const FeedbackItem: FC<T_FeedbackItem> = ({
  id,
  name,
  text
}) => {

  return (
    <>
      <h2 className="newfb-h1">{id}</h2>
      <h1 className="newfb-h1">{name}</h1>
      <h2 >{text}</h2>
    </>
  )
}