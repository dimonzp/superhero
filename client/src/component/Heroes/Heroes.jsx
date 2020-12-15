import React from "react";
import s from "./Heroes.module.sass";
import noPhoto from "../../assets/noPhoto.png";
import { NavLink } from "react-router-dom";
import { Badge, Button } from "react-bootstrap";

const Heroes = (props) => {
  let pages = [];

  let pagesCount = Math.ceil(props.allHeroesCount / 5);
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div className={s.addHeroButton}>
        <NavLink to={`/addNew`}>
          <Button variant="outline-warning">Добавить героя</Button>
        </NavLink>
      </div>
      {props.heroes.map((hero) => {
        return (
          <div className={s.Heroes}>
            <div></div>
            <div className={s.oneHero}>
              <div className={s.avatar}>
                <NavLink to={`/hero/${hero._id}`}>
                  <img
                    src={
                      (hero.images &&
                        hero.images[0] &&
                        hero.images[0].filepath) ||
                      noPhoto
                    }
                    className={s.avatar}
                  ></img>
                </NavLink>
              </div>

              <div>
                <NavLink to={`/hero/${hero._id}`}>
                  <h1>
                    <Badge variant="light">{hero.nickname}</Badge>
                  </h1>
                </NavLink>
              </div>
            </div>
            <div></div>
          </div>
        );
      })}
      <div className={s.pagination}>
        {pages.map((p) => {
          return (
            <span
              className={props.page === p ? s.selectedPage : s.allPage}
              onClick={() => {
                props.onPageChange(p);
              }}
            >
              {p + " "}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Heroes;
