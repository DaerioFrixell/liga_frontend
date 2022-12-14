// import { useDispatch } from "react-redux";
// import { deleteLessonAction } from "../../../../../models/lessons/lessonsAction";
import { Header } from "../../components/header/Header";
import "./lesson.scss"

export const Lesson = () => {


  // const dispatch = useDispatch();
  // const deleteCurrentLesson = () => {
  //   dispatch(deleteLessonAction(lessonsArr.filter(less => less.id !== num)))
  // }

  return (
    <>
      <Header />
      <div className="lesson">
        <p className="lesson__num">nu</p>
        <p className="lesson__title">title</p>

        <div className="lesson__flex-wrapper">
          <button className="lesson__flex-wrapper__edit">edit</button>
          <button
            className="lesson__flex-wrapper__del"
          // onClick={deleteCurrentLesson}
          >del</button>
        </div>
      </div>
    </>
  );
}