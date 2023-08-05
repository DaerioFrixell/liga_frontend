import { FC } from "react"
import { Link } from "react-router-dom"
import "./menu.scss"

type MenuType = {
  isOpen: boolean
}

export const Menu: FC<MenuType> = ({ isOpen }) => {

  return (
    <>
      {isOpen && (<div className="menu" onClick={e => e.stopPropagation()}>
        <p>
          <Link
            to="/auth"
            className="menu-link"
          >авторизироваться</Link>
        </p>
        <p>
          <Link
            to="/feedbacks"
            className="menu-link"
          >посмотреть отзывы</Link>
        </p>
        <p>
          <Link
            to="/LessonsList"
            className="menu-link"
          >список уровней</Link>
        </p>

      </div>
      )}
    </>
  )
}