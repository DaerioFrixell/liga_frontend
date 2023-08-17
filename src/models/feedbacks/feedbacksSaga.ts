import { FeedbackActionType } from "./types/actionTypes"
import { Dispatch } from "redux"
import axios from "axios"
import type { } from 'redux-thunk/extend-redux';


/** 
 * хочу Thunk на Saga переделать весь этот ужас. 
 * С БД пока не связываюсь 
*/

export const fetchFeedbacks = () => {
  // return async (dispatch: Dispatch<FeedbackAction>) => {
  //   try {
  //     dispatch({ type: FeedbackActionType.FETCH_FEEDBACKS })
  //     const response = await axios
  //       .get("https://jsonplaceholder.typicode.com/comments?_limit=5")
  //     dispatch({
  //       type: FeedbackActionType.FETCH_FEEDBACKS_SUCCESS,
  //       payload: response.data
  //     })
  //   } catch (e) {
  //     dispatch({
  //       type: FeedbackActionType.FETCH_FEEDBACKS_ERROR,
  //       payload: "ошибка при загрузке пользователей"
  //     })
  //   }
  // }
}