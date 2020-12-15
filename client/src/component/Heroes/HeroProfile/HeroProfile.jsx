import React from "react";
import s from "../Heroes.module.sass";
import noPhoto from "../../../assets/noPhoto.png";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

class HeroProfile extends React.Component {
  render() {
    const {
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
      images,
      _id,
    } = this.props;

    return (
      <div className={s.heroProfile}>
        <div></div>
        <div>
          {images[0] && images[0].filepath ? (
            <AwesomeSlider>
              {images.map((i) => {
                return <div data-src={i.filepath} />;
              })}
            </AwesomeSlider>
          ) : (
            <img width={300} height={300} className={s.noPhoto} src={noPhoto} />
          )}

          <h4>{nickname}</h4>
          <h6>Настоящее имя: {real_name}</h6>
          <h6>Крылатая фраза: "{catch_phrase}"</h6>
          <p>
            <h5>Суперсилы</h5>
            {superpowers}
            <p></p>
            <h5>Биография</h5>
            {origin_description}
          </p>
        </div>

        <div>
          <NavLink to={`/update/${_id}`}>
            <Button variant="outline-warning">Ред.</Button>
          </NavLink>
        </div>
        <div></div>
      </div>
    );
  }
}

export default HeroProfile;
