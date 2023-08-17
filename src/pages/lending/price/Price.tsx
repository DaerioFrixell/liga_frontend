import { abonements } from './abonements';
import './price.scss';
import { FC } from "react";


export const Price: FC = () => {
  return (
    <div id="priceBlock" className="price">
      <h2 className="price__title">абонементы</h2>

      <p>*стоимость зависит от длительности и количества  занятий в месяц</p>
      <br />

      <p>список текущих абонементов:</p>
      <br />

      <div className="price__inner">
        {abonements.map(i =>
          <div key={i.amount} className="price__inner__item">
            <p className="price__inner__item__count">количество</p>
            <p className="price__inner__item__count">{i.count} ур</p>

            <p className="price__inner__item__duar">длительность</p>
            <p className="price__inner__item__duar">{i.duration} мин</p>

            <p className="price__inner__item__price">цена</p>
            <p className="price__inner__item__price">{i.amount} р</p>
          </div>
        )}
      </div>
    </div>
  )
}